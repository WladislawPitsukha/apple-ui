import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const geistMono = localFont({
    src: "../../../assets/fonts/geist-mono-font-family-1730335527-0/GeistMonoVF-BF65694d06478d9.ttf",
    variable: "--font-geist-mono"
});

export const metadata: Metadata = {
    title: "AirPods",
    description: "The airpods's page of copy version"
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
                <NavBar />
                    {children}
                <Footer />
            </body>
        </html>
    )
}