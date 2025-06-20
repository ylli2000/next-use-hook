import VersionSwitcher from "@/components/version-switcher";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import maxresdefault from "./images/maxresdefault.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{position:'fixed',inset:0,zIndex:-1,display:'flex',justifyContent:'center'}}>
          <div style={{position:'relative',width:'100%',maxWidth:1800,height:'100%'}}>
            <Image
              src={maxresdefault}
              alt="James Webb: the biggest, boldest, riskiest space telescope flying in the space."
              placeholder="blur"
              quality={80}
              fill
              sizes="100vw"
              style={{objectFit:'cover'}}
              priority={false}
              loading="lazy"
            />
            <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.8)'}} />
          </div>
        </div>
        <div className="max-w-[1600px] mt-16 mx-auto p-4">
          <div className="flex justify-center mb-8">
            <VersionSwitcher />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
