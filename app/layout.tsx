import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

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
      className={`${outfit.className} ${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-[#B3CDD7] selection:bg-[#19D1E6]/30">
        {/* Site Watermark */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.02] overflow-hidden flex items-center justify-center">
          <img 
            src="/images/node-logo.png" 
            alt="" 
            className="w-[80vw] max-w-[1000px] h-auto grayscale" 
            style={{ filter: 'invert(76%) sepia(88%) saturate(1487%) hue-rotate(143deg) brightness(101%) contrast(101%)' }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
