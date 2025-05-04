import { ChevronLeft, ChevronRight, Edit } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/shared/header";
import Image from "next/image";
export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="px-5 pt-10">
        <Header title="마이페이지" />
      </div>

      {/* Profile Section */}
      <div className="flex p-6">
        <div className="w-20 h-20 bg-gray-4 rounded-full flex items-center justify-center mr-4">
          <Image src="/icon/avatar.svg" alt="avatar" width={40} height={40} />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex mb-1 justify-between">
            <div className="flex items-center">
              <h2 className="text-body-4 text-[#1c1c1c] mr-2">호호</h2>
              <button>
                <Edit className="w-5 h-5 text-[#828282]" />
              </button>
            </div>
            <button className="px-3 py-2 text-body-5 bg-gray-4 rounded-[5px]">
              로그아웃
            </button>
          </div>
          <p className="text-body-5 text-gray-1">mimimom@gmail.com</p>
        </div>
      </div>

      {/* Settings List */}
      <div className="flex-1">
        {/* Service Notifications */}
        <div className="flex items-center justify-between px-6 border-t border-gray-200">
          <span className="text-body-2">서비스 알림</span>
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
    <div className="flex items-center justify-between text-body-2 px-6 border-t border-gray-200">
      <span className="text-body-2">{title}</span>
      <ChevronRight className="w-5 h-5 text-gray-2" />
    </div>
  );
}
