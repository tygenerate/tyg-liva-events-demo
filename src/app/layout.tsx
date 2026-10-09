
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liva Events | Organizasyon & Davet Tasarımı",
  description:
    "Liva Events — TYGenerate tarafından hazırlanmış zarif organizasyon ve davet demo web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
