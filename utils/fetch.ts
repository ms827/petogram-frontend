/**
 * 커스텀 에러 클래스
 * @description
 * 기본 `Error` 클래스를 확장한 커스텀 에러 클래스.
 */
export class CustomError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.name = "CustomError";
  }
}

/**
 * 액세스 토큰 갱신
 * @async
 * @function postRefresh
 * @description
 * 쿠키에 저장된 리프레시 토큰을 사용해 액세스 토큰을 갱신하는 POST 요청을 보냄
 * 갱신에 성공하면 쿠키에 새 `accessToken`을 저장
 * 갱신에 실패할 경우, 쿠키를 삭제하고, 로컬 스토리지의 유저 정보를 제거한 뒤 지정된 페이지로 리다이렉트
 *
 * @returns {Promise<string>} - 새로 발급된 액세스 토큰
 * @throws {CustomError} - 토큰 갱신 실패 시 발생
 */
const postRefresh = async () => {
  try {
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="))
      ?.split("=")[1];

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      },
    );

    if (!response.ok) {
      throw new CustomError(response.status, "토큰 재발급에 실패했습니다.");
    }

    const data = await response.json();
    document.cookie = `accessToken=${data.accessToken}; path=/`; // 새 토큰을 쿠키에 저장
    return data.accessToken;
  } catch (error) {
    // 쿠키 삭제
    document.cookie = `accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    // 로컬 스토리지 유저 정보 삭제
    localStorage.removeItem("user");
    localStorage.setItem("nextPath", window.location.pathname);
    window.location.href = "/";
    throw error instanceof CustomError
      ? error
      : new CustomError(500, "토큰 재발급 중 알 수 없는 오류가 발생했습니다.");
  }
};

/**
 * 액세스 토큰을 사용한 Fetch
 * @async
 * @function fetchWithToken
 * @description
 * 요청 시 액세스 토큰을 `Authorization` 헤더에 포함하여 Fetch 요청을 보냄
 *
 * @param {string} url - 요청 URL
 * @param {string | undefined} token - 액세스 토큰
 * @param {RequestInit} [options={}] - Fetch 옵션 객체 (헤더 제외)
 * @returns {Promise<Response>} - Fetch 응답 객체
 */
const fetchWithToken = async (
  url: string,
  token: string | undefined,
  options: RequestInit = {}, // Content-Type을 제외한 옵션들
) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };
  const fetchOptions = { ...options, headers };
  return fetch(url, fetchOptions);
};

/**
 * 커스텀 Fetch 함수
 * @async
 * @function customFetch
 * @description
 * API 요청을 처리하며, 응답을 JSON 또는 Blob 형태로 반환
 * 토큰 만료 시 자동으로 갱신 및 재요청 처리
 *
 * @param {string} url - 요청 URL
 * @param {RequestInit} [options={}] - Fetch 옵션 객체
 * @param {"json" | "blob"} [responseType="json"] - 응답 타입 (기본값: JSON)
 * @param {boolean} [noResponse=false] - 응답 반환 여부 (true일 경우 응답 처리 안 함)
 * @returns {Promise<any>} - JSON 또는 Blob 형태의 응답
 * @throws {CustomError} - 요청 실패시 에러 발생
 */
const getAccessTokenFromCookie = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];
};

let token = getAccessTokenFromCookie();
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const customFetch = async (
  url: string,
  options: RequestInit = {},
  responseType: "json" | "blob" = "json",
  noResponse?: boolean,
) => {
  const fullUrl = `${baseUrl}${url}`;
  try {
    let response = await fetchWithToken(fullUrl, token, options);

    // 401 Unauthorized 처리
    if (response.status === 401) {
      try {
        token = await postRefresh(); // 새 토큰 발급
        response = await fetchWithToken(fullUrl, token, options); // 새 토큰으로 재시도
      } catch (refreshError) {
        throw refreshError; // postRefresh 내에서 처리됨
      }
    }

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new CustomError(
        response.status,
        errorMessage || "API 호출 중 오류 발생",
      );
    }

    // 응답 반환값이 없을 경우
    if (noResponse) {
      return;
    }

    // 응답 처리
    return responseType === "blob"
      ? await response.blob()
      : await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(500, "API 호출 중 알 수 없는 오류가 발생했습니다.");
  }
};
