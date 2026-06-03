import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alina Shidakova | Врач-косметолог в Москве",
  description: "Запись на эстетическую косметологию, пилинги, биоревитализацию и ботулинотерапию в Москве.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
