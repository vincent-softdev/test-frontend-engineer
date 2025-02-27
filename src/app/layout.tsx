import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard";
import Header from "@/views/Header";

// ✅ Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Shopee",
  description: "Secure shopping experience",
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
            <Header />
            <main className="container mx-auto p-4">{children}</main>
          </AuthGuard>
        )}
      </body>
    </html>
  );
}
