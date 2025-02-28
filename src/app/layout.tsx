import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard";
import HeaderView from "@/views/Header";

// ✅ Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata suggested by ChatGPT
export const metadata: Metadata = {
  title: "Vincent Shopee - Best Online Shopping",
  description: "Shop the latest fashion trends, electronics, and more at Vincent Shopee.",
  keywords: "fashion, shopping, electronics, online store",
  openGraph: {
    title: "Vincent Shopee - Best Online Shopping",
    description: "Discover amazing deals and the latest fashion trends.",
    url: "https://vincently.dev",
    siteName: "Vincent Shopee",
    images: [
      {
        url: "/public/seo-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vincent Shopee Online Store",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Shopee - Best Online Shopping",
    description: "Shop the latest trends at Vincent Shopee!",
    images: ["/public/seo-image.jpg"],
  },
};

// ✅ Check if the route is login (Next.js does not provide `pathname` here, so we check manually)
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isLoginPage = typeof window !== "undefined" && window.location.pathname === "/login";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {isLoginPage ? (
          children // ✅ Render login page directly without `AuthGuard`
        ) : (
          <AuthGuard> {/* ✅ Protect all other pages */}
            <HeaderView />
            <main className="container mx-auto p-4">{children}</main>
          </AuthGuard>
        )}
      </body>
    </html>
  );
}
