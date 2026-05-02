import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Node | Agência Digital",
  description: "Especialistas em Programação, UI/UX Design e Automações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.className} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#052A3D] text-[#B3CDD7] selection:bg-[#19D1E6]/30">{children}</body>
    </html>
  );
}
