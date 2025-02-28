"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const HeaderUser = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (!user) {
    return <a href="/login" className="text-blue-600 hover:underline">Login</a>;
  }

  return (
    <div className="flex items-center gap-3">
      {user.profileImage && (
        <img src={user.profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
      )}
      <span className="text-gray-700 font-medium">{user.name}</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderUser;
