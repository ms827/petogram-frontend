import Image from "next/image";
import { Button } from "@/components/ui/button";

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
          <Button className="w-full h-14 bg-[#4285F4] hover:bg-[#5086ec] text-white rounded-md flex items-center relative">
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
        </div>
      </div>
    </main>
  );
}
