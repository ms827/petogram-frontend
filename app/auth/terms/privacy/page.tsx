import AuthHeader from "@/app/auth/_components/auth-header";

export default function PrivacyTermsPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none py-4">
        <AuthHeader title="개인정보 수집 / 이용내역" />
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-sm space-y-6">
        <table className="w-full border text-center text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-2 w-[10%]">구분</th>
              <th className="border px-2 py-2 w-[30%]">수집/이용 항목</th>
              <th className="border px-2 py-2 w-[30%]">수집/이용 목적</th>
              <th className="border px-2 py-2 w-[30%]">보유기간</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-40">
              <td className="border px-2 py-2 align-center">필수</td>
              <td className="border px-2 py-2 align-center whitespace-pre-line">
                성명, 아이디, 비밀번호, 이메일
              </td>
              <td className="border px-2 py-2 align-center" rowSpan={2}>
                공유자원 이용 및 회원관리
              </td>
              <td className="border px-2 py-2 align-center" rowSpan={2}>
                탈퇴 시 즉시 파기, 거래정보에 포함된 사용자 정보는 따로 분리하여
                보관/관리(5년)
              </td>
            </tr>
            <tr className="h-40">
              <td className="border px-2 py-2 align-center">선택</td>
              <td className="border px-2 py-2 align-center whitespace-pre-line">
                환불계좌정보 (은행명, 계좌번호, 예금주), 공유자원 사용이력정보
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
