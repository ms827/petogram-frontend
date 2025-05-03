import Header from "./_components/header";
import Image from "next/image";
import CTAButton from "./_components/cta-button";

export default function HomePage() {
  return (
    <div className="px-5">
      <Header />
      <div className="flex flex-col gap-4 pt-3">
        <div className="flex justify-between">
          <p className="text-title-1 font-gmarket-sans">
            <span className="text-primary">펫토그램</span>에서
            <br />
            나만의 펫을 만들어봐요!
          </p>
          <div className="p-[10px]">
            <Image src="/icon/heart.svg" alt="heart" width={46} height={41} />
          </div>
        </div>
        <CTAButton />
      </div>
    </div>
  );
}
