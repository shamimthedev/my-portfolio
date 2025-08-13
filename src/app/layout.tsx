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
  description: "Frontend Developer and Digital Marketing expert from Bangladesh. Specializing in React, Next.js, and modern web technologies. Founder of GroWise Studio - offering digital marketing and web development services.",
  keywords: [
    "frontend developer",
    "digital marketing",
    "React",
    "Next.js",
    "web development",
    "Bangladesh",
    "GroWise Studio",
    "freelance developer",
    "Shamim Hossain"
  ],
  authors: [{ name: "Md. Shamim Hossain" }],
  creator: "Md. Shamim Hossain",
  publisher: "Md. Shamim Hossain",
  metadataBase: new URL("https://yourdomain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Md. Shamim Hossain Portfolio",
    title: "Md. Shamim Hossain - Frontend Developer & Digital Marketer",
    description: "Frontend Developer and Digital Marketing expert from Bangladesh. Specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg", // Add an Open Graph image to your public folder
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
    creator: "@yourtwitter", // Replace with your Twitter handle if you have one
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
    google: "your-google-verification-code", // You'll get this from Google Search Console
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
    url: "https://shamimthedev.vercel.app", // Replace with your actual domain
    image: "https://shamimthedev.vercel.app/profile-image.png", // Add your profile image
    sameAs: [
      "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn
      "https://github.com/yourprofile", // Replace with your GitHub
      // Add other social profiles
    ],
    worksFor: {
      "@type": "Organization",
      name: "GroWise Studio",
      url: "https://growisestudio.vercel.app", // If you have a website for your agency
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