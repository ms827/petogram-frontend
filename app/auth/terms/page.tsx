"use client";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full p-6 rounded-xl shadow-md border border-gray-100 relative">
        {/* 닫기 버튼 */}
        <button className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        {/* 약관 전체 동의 */}
        <div className="flex items-center gap-2 mb-6 mt-2">
          <Checkbox
            checked={allChecked}
            onCheckedChange={handleAll}
            className="rounded-full bg-gray-4"
            aria-label="약관 전체 동의"
          />
          <span className="font-semibold text-lg text-gray-700">
            약관에 모두 동의
          </span>
        </div>
        {/* 개별 약관 */}
        <div className="flex flex-col gap-4 mb-8">
          {termsList.map((term, idx) => (
            <div key={term.id} className="flex items-center gap-2">
              <Checkbox
                checked={checked[idx]}
                onCheckedChange={() => handleCheck(idx)}
                className=" bg-gray-4"
                aria-label={term.label}
              />
              <span className="text-gray-500 text-base">{term.label}</span>
              <span
                className="ml-auto text-gray-300 text-xl cursor-pointer"
                onClick={() => handleDetail(idx)}
              >
                <ChevronRight size={24} className="cursor-pointer" />
              </span>
            </div>
          ))}
        </div>
        {/* 확인 버튼 */}
        <button
          className={`w-full h-12 rounded-md text-white text-lg font-medium ${
            allChecked ? "bg-primary-black" : "bg-gray-200"
          }`}
          disabled={!allChecked}
        >
          확인
        </button>
      </div>
    </main>
  );
}
