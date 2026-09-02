
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ReviewSidebar from "@/components/reViews"
import { ReviewSidebarProvider } from "@/components/ReviewSidebarContext"

import FloatingWhatsApp from "@/components/floating-whatsapp"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "  Romana Wasem - Expert Content Writer & SEO Copywriter",

  description:
    "Discover   Romana Wasem's professional content writing portfolio. Expert in SEO content, blog writing, and copywriting to boost engagement and rankings.",

  keywords: [
    "content writer",
    "SEO content",
    "blog writing",
    "copywriting",
    "content strategy",
    "freelance writer",
    "  Romana Wasem portfolio",
    "storycup",
  ],

  icons: {
    icon: "/anam.png",
    shortcut: "/anam.png",
    apple: "/anam.png",
  },

  authors: [{ name: "  Romana Wasem" }],

  openGraph: {
    title: "  Romana Wasem - Expert Content Writer & Copywriter",
    description:
      "Explore   Romana Wasem's portfolio of engaging blog posts, SEO content, and persuasive copywriting for businesses and brands.",
    type: "website",
    url: "https://storycup.vercel.app/",
    images: [
      {
        url: "/anam.png",
        width: 1200,
        height: 630,
        alt: "  Romana Wasem Content Writing Portfolio",
      },
    ],
    siteName: "  Romana Wasem Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "  Romana Wasem - Expert Content Writer & Copywriter",
    description:
      "Explore   Romana Wasem's portfolio of engaging blog posts, SEO content, and persuasive copywriting.",
    images: ["/anam.png"],
  },

  alternates: {
    canonical: "https://storycup.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <ReviewSidebarProvider>
          <ReviewSidebar />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children} 
           <FloatingWhatsApp/>
          </ThemeProvider>
        </ReviewSidebarProvider>
      </body>
    </html>
  )
}
