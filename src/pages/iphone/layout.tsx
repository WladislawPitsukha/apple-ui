import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const geistMono = localFont({
    src: "../assets/fonts/geist-mono-font-family-1730335527-0/GeistMono-Black-BF65694d04ad722.otf",
    variable: "--font-geist-mono"
});

export const metadata: Metadata = {
    title: "Iphone",
    description: "The iphone's page of copy version"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return(
        <html lang="en">
            <body 
                className={geistMono.variable}
            >
                {children}
            </body>
        </html>
    )
}