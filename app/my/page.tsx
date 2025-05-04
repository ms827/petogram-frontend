import { ChevronLeft, ChevronRight, Edit } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/shared/header";
export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="px-5 pt-10">
        <Header title="마이페이지" />
      </div>

      {/* Profile Section */}
      <div className="flex items-center p-6 border-b border-gray-100">
        <div className="w-20 h-20 bg-[#f1f1f1] rounded-full flex items-center justify-center mr-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#b4b4b4]"
          >
            <rect
              x="10"
              y="8"
              width="20"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M14 30H26"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 24V30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <h2 className="text-xl font-medium text-[#1c1c1c] mr-2">호호</h2>
            <button>
              <Edit className="w-5 h-5 text-[#828282]" />
            </button>
          </div>
          <p className="text-[#b4b4b4]">mimimom@gmail.com</p>
        </div>
        <button className="px-4 py-2 text-sm text-[#1c1c1c] bg-[#f1f1f1] rounded-full">
          로그아웃
        </button>
      </div>

      {/* Settings List */}
      <div className="flex-1">
        {/* Service Notifications */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-[#1c1c1c] font-medium">서비스 알림</span>
          <Switch className="data-[state=checked]:bg-[#ff720d] data-[state=checked]:border-[#ff720d]" />
        </div>

        {/* Menu Items */}
        <MenuLink title="리뷰하기" />
        <MenuLink title="이용약관" />
        <MenuLink title="문의하기" />
        <MenuLink title="회원 탈퇴" />
        <MenuLink title="오픈소스 내역보기" />
        <MenuLink title="사업자 정보" />
      </div>
    </div>
  );
}

function MenuLink({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
      <span className="text-[#1c1c1c] font-medium">{title}</span>
      <ChevronRight className="w-5 h-5 text-[#828282]" />
    </div>
  );
}
