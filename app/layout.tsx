import localFont from "next/font/local";
// import { AuthProvider } from "./context/AuthContext";
import { Unbounded } from "next/font/google";
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

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const gmarketSans = localFont({
  src: [
    {
      path: "./font/GmarketSansTTFLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/GmarketSansTTFMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/GmarketSansTTFBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gmarket-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${unbounded.variable} ${gmarketSans.variable} font-pretendard max-w-[600px] mx-auto`}
      >
        {/* <AuthProvider>{children}</AuthProvider> */}
        {children}
      </body>
    </html>
  );
}
