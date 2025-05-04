import { LoginRes } from "@/app/api/dto/user";
import { customFetch, CustomError } from "@/utils/fetch";

const useAuthCallback = (
  onSuccess: (isNeededToUpdateNickname: boolean) => void,
  onFail: (status: number) => void,
) => {
  const callback = async (
    code: string,
    provider: "google" | "kakao",
    isDev?: boolean,
  ) => {
    try {
      const endPoint = isDev
        ? `/auth/${provider}/callback?code=${code}&dev=true`
        : `/auth/${provider}/callback?code=${code}`;
      const res: LoginRes = await customFetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { tokens } = res;
      const { user } = res;
      const userInfo = {
        ...user,
        noticeExposure: {},
      };
      document.cookie = `accessToken=${tokens.accessToken}; path=/;`;
      document.cookie = `refreshToken=${tokens.refreshToken}; path=/;`;
      localStorage.setItem("user", JSON.stringify(userInfo));

      onSuccess(res.isNeededToUpdateNickname);
      // 닉네임 업데이트가 필요하지 않다면 nextPath로 이동(onSuccess)하며 nextPath 삭제
      if (res.isNeededToUpdateNickname) {
        localStorage.removeItem("nextPath");
      }
    } catch (e: unknown) {
      onFail((e as CustomError).statusCode);
      console.error(e);
    }
  };
  return { callback };
};
export default useAuthCallback;
