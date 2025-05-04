import Image from "next/image";
import GoogleLoginButton from "../auth/_components/google-login-button";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 ">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/logo/logo.png"
            alt="Petogram Logo"
            width={250}
            height={220}
            priority
          />
        </div>

        <p className="text-[#828282] text-lg mt-16 mb-8">
          SNS 계정으로 간편 로그인
        </p>

        <div className="w-full">
          <GoogleLoginButton />
        </div>
      </div>
    </main>
  );
}
