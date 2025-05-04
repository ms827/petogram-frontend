import { customFetch } from "@/utils/fetch";

// 작가 정산 내역 조회
export const postLogout = async () => {
  try {
    await customFetch(`/auth/logout`, {
      method: "POST",
    });
  } catch (err) {
    console.error(err);
    throw new Error("로그아웃에 실패했습니다."); // 에러 다시 던지기
  }
};
