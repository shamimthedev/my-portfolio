import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Defines a CSS variable for Inter
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif", // Defines a CSS variable for Calistoga
  weight: ["400"],
});

export const metadata = {
  title: "Md. Shamim Hossain",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
