import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Md. Shamim Hossain - Frontend Developer & Digital Marketer",
    template: "%s | Md. Shamim Hossain"
  },
  description: "Md. Shamim Hossain is a Frontend Developer and Digital Marketing expert from Bangladesh, specializing in React, Next.js, and modern web technologies. Founder of GroWise Studio, delivering exceptional digital solutions.",
  keywords: [
    "Shamim Hossain",
    "ShamimTheDev",
    "frontend developer Bangladesh",
    "digital marketing expert",
    "React developer",
    "Next.js specialist",
    "web development services",
    "GroWise Studio",
    "freelance developer Dhaka",
    "modern web technologies",
    "TypeScript developer",
    "Tailwind CSS expert"
  ],
  authors: [{ name: "Md. Shamim Hossain" }],
  creator: "Md. Shamim Hossain",
  publisher: "Md. Shamim Hossain",
  metadataBase: new URL("https://shamimthedev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamimthedev.vercel.app", 
    siteName: "Md. Shamim Hossain Portfolio",
    title: "Md. Shamim Hossain - Frontend Developer & Digital Marketer",
    description: "Frontend Developer and Digital Marketing expert from Bangladesh. Specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Shamim Hossain - Frontend Developer & Digital Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shamim Hossain - Frontend Developer & Digital Marketer",
    description: "Frontend Developer and Digital Marketing expert from Bangladesh. Specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
    creator: "@shamimthedev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google8a122e0b0ebd53f3",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Shamim Hossain",
    alternateName: "Shamim Hossain",
    jobTitle: "Frontend Developer & Digital Marketer",
    description: "Frontend Developer and Digital Marketing expert from Bangladesh. Founder of GroWise Studio.",
    url: "https://shamimthedev.vercel.app", 
    image: "https://shamimthedev.vercel.app/profile-image.png",
    sameAs: [
      "https://linkedin.com/in/shamimthedev", 
      "https://github.com/shamimthedev", 
      "https://facebook.com/shamimthedev", 
      "https://instagram.com/shamimthedev", 
      // Add other social profiles
    ],
    worksFor: {
      "@type": "Organization",
      name: "GroWise Studio",
      url: "https://growisestudio.vercel.app", 
    },
    knowsAbout: [
      "Frontend Development",
      "Digital Marketing",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "SEO",
      "Content Marketing"
    ],
    nationality: "Bangladesh",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressRegion: "Dhaka Division",
      addressLocality: "Dhaka"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}