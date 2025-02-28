"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { user, loginWithGoogle, loginAsGuest } = useAuthStore();
  const router = useRouter();

  // ✅ If user is already logged in, redirect them to home
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-6">Login to Vincent Shopee</h1>
      {/* 🚀 Login buttons */}
      <button
        onClick={async () => {
          await loginWithGoogle();
          router.push("/"); // ✅ Redirect after login
        }}
        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-400 mb-4"
      >
        Login with Google
      </button>
      {/* 🚀 Guest login: We might want to allow user to go and skim through our items */}
      <button
        onClick={async () => {
          await loginAsGuest();
          router.push("/"); // ✅ Redirect after guest login
        }}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-400"
      >
        Continue as Guest
      </button>
    </div>
  );
};

export default LoginPage;
