import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const geistMono = localFont({
  src: "../assets/fonts/geist-mono-font-family-1730335527-0/GeistMono-Black-BF65694d04ad722.otf",
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: "Apple UI",
  description: "The copy page of Apple's page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistMono.variable}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
