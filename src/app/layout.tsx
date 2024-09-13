import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
//import PageTransition from "@/components/pageTransition";
//import StairTransition from "@/components/StairTransition";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Olá eu sou André",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Toaster />
        <Header />
        {children}
        {/* <StairTransition />
        <PageTransition>{children}</PageTransition> */}
        <Footer />
      </body>
    </html>
  );
}
