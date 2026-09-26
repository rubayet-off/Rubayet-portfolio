import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rowshan Rubayet | Portfolio",
  description:
    "Portfolio of Rowshan Rubayet, an undergraduate Computer Science student in Bangladesh passionate about AI, Machine Learning, LLMs, and Web Development.",
  keywords: ["Rowshan Rubayet", "Portfolio", "CSE", "Machine Learning", "AI", "Software Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-[#EAEAEA] antialiased">
        {children}
      </body>
    </html>
  );
}