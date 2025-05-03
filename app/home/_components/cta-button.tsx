import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CTAButton() {
  return (
    <div className="relative w-full">
      <div className="absolute h-[61px] inset-0 rounded-[7px] bg-[#1C1C1C] shadow-[0px_4px_15px_0px_#0000001A]" />
      <Button
        variant="primary"
        className="relative flex items-center justify-between rounded-[7px] h-14 text-lg font-medium bg-[#FF8200] ml-[1px] mt-[1px] mr-[4px] border-none shadow-none px-6 w-[calc(100%-4px)]"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/icon/heart-square.svg"
            alt="heart"
            width={32}
            height={32}
          />
          <span className="font-gmarket-sans text-title-1">마이펫 만들기</span>
        </div>
        <Image
          src="/icon/arrow-right.svg"
          alt="arrow-right"
          width={18}
          height={18}
        />
      </Button>
    </div>
  );
}
