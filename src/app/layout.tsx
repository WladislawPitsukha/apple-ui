import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
