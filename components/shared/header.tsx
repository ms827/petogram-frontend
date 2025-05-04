"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const router = useRouter();
  const handleBack = () => {
    // 뒤로가기 로직
    router.back();
  };
  return (
    <div className="flex items-center relative">
      <button
        onClick={handleBack}
        className="text-gray-400 hover:text-gray-600"
      >
        <ChevronLeft size={24} />
      </button>
      <span className="font-unbounded font-bold text-lg absolute left-1/2 transform -translate-x-1/2">
        {title}
      </span>
    </div>
  );
}
