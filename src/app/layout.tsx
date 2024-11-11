import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Folki Store",
  description: "Loja do Folki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased bg-folki-dark-grey`}>
          {children}   
      </body>
    </html>
  );
}
