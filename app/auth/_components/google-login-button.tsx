"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_DEV;
    const scope =
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;

    window.location.href = authUrl;
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      className="w-full h-14 bg-[#4285F4] hover:bg-[#5086ec] text-white rounded-md flex items-center relative"
    >
      <Image
        src="/icon/google.svg"
        alt="Google"
        width={24}
        height={24}
        className="absolute left-4"
      />
      <span className="text-base font-medium flex-1 text-center">
        Google로 계속하기
      </span>
    </Button>
  );
}
