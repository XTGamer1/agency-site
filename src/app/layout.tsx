import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/component/header";
import { Footer } from "@/components/component/footer";
import Preloader from "@/components/component/preloader";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
       <Preloader />
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
