import AuthHeader from "@/app/auth/_components/auth-header";

export default function MarketingTermsPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none py-4">
        <AuthHeader title="마케팅 수신 정보" />
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-sm space-y-6">
        <table className="w-full border text-center text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-2 w-1/3">항목</th>
              <th className="border px-2 py-2 w-1/3">목적</th>
              <th className="border px-2 py-2 w-1/3">보유기간</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-40">
              <td className="border px-2 py-2 align-center whitespace-pre-line">
                이름, 이메일주소, 휴대전화번호, 마케팅 수신 동의 여부
              </td>
              <td className="border px-2 py-2 align-center whitespace-pre-line">
                펫토그램이 제공하는 이용자 맞춤형 서비스 및 상품 추천, 각종 경품
                행사, 이벤트 등의 광고성 정보 제공(이메일, 서신우편, SMS,
                카카오톡 등)
              </td>
              <td className="border px-2 py-2 align-top whitespace-pre-line">
                회원 탈퇴 후 30일 또는 동의 철회 시까지
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
