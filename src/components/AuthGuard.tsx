"use client";
import { useEffect, ReactNode, useMemo } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, usePathname } from "next/navigation";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Ensure `isLoginPage` is stable (memoized)
  const isLoginPage = useMemo(() => pathname === "/login", [pathname]);

  useEffect(() => {
    if (!user && !isLoginPage) {
      router.push("/login");
    }
  }, [user, router, isLoginPage]); // ✅ Stable dependency array

  if (!user && !isLoginPage) return null; // ✅ Hide everything except login page

  return <>{children}</>;
};

export default AuthGuard;
