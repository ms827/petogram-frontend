"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import AuthHeader from "@/app/auth/_components/auth-header";
import { Button } from "@/components/ui/button";

const termsList = [
  { id: 1, label: "서비스 이용약관 동의", required: true },
  { id: 2, label: "개인정보 처리 방침 동의", required: true },
  { id: 3, label: "마케팅 정보 수신 동의 (선택)", required: false },
];

export default function TermsPage() {
  const [checked, setChecked] = useState([true, true, true]);
  const router = useRouter();

  const allChecked = checked.every(Boolean);

  const handleAll = () => {
    const newValue = !allChecked;
    setChecked([newValue, newValue, newValue]);
  };

  const handleCheck = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleDetail = (idx: number) => {
    if (idx === 0) router.push("/auth/terms/service");
    if (idx === 1) router.push("/auth/terms/privacy");
    if (idx === 2) router.push("/auth/terms/marketing");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none py-4">
        <AuthHeader title="약관동의" />
      </div>
      <div className="flex-1 flex flex-col justify-end">
        {/* 약관 동의 내역 */}
        <div className="overflow-y-auto p-4 text-sm rounded-t-xl border border-b-0 border-gray-200">
          {/* 약관 전체 동의 */}
          <div className="flex items-center gap-4">
            <Checkbox
              checked={allChecked}
              onCheckedChange={handleAll}
              className="rounded-full bg-gray-4"
              aria-label="약관 전체 동의"
            />
            <span className="text-lg text-[#1C1C1C]">약관에 모두 동의</span>
          </div>
          <div className="border-t border-gray-200 my-5"></div>
          {/* 개별 약관 */}
          <div className="flex flex-col gap-4">
            {termsList.map((term, idx) => (
              <div key={term.id} className="flex items-center gap-4">
                <Checkbox
                  checked={checked[idx]}
                  onCheckedChange={() => handleCheck(idx)}
                  className="bg-gray-4"
                  aria-label={term.label}
                />
                <span className="text-gray-500 text-lg">{term.label}</span>
                <span
                  className="ml-auto text-gray-300 cursor-pointer"
                  onClick={() => handleDetail(idx)}
                >
                  <ChevronRight size={20} className="cursor-pointer" />
                </span>
              </div>
            ))}
          </div>
          {/* 확인 버튼 */}
          <Button
            variant="primary"
            className={`w-full h-12 text-lg rounded-md font-medium mt-8 ${
              !allChecked ? "opacity-50" : ""
            }`}
            disabled={!allChecked}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
