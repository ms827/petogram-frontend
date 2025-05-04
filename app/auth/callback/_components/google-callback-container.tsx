import { JOIN_TERMS_PAGE, LOGIN_PAGE } from "@/constants/path";
import useAuthCallback from "@/hooks/auth/use-auth-callback";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleCallbackContainer = () => {
  const code = useSearchParams().get("code");
  const router = useRouter();
  const nextPath = localStorage.getItem("nextPath");
  const onSuccess = (isNeededToUpdateNickname: boolean) => {
    if (isNeededToUpdateNickname) {
      router.push(JOIN_TERMS_PAGE);
    } else {
      router.push(nextPath || "/");
    }
  };
  // 로그인 실패 콜백
  const onFail = (status: number) => {
    if (status === 403) {
      router.replace(`${LOGIN_PAGE}?reason=block`);
    } else {
      router.replace(`${LOGIN_PAGE}?reason=other`);
    }
  };

  const { callback } = useAuthCallback(onSuccess, onFail);

  if (code) {
    const isDev = process.env.NODE_ENV === "development";
    callback(code, "google", isDev);
  }
  return null;
};
export default GoogleCallbackContainer;
