import localFont from "next/font/local";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Petogram",
  description: "Petogram Frontend",
};

const pretendard = localFont({
  src: [
    {
      path: "./font/Pretendard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Pretendard-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Pretendard-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/Pretendard-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Pretendard-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-pretendard max-w-[650px] mx-auto`}
      >
        <AuthProvider>{children}</AuthProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
