'use client'
import HeaderCartIcon from "@/components/Header/HeaderCartIcon";
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderUser from "@/components/Header/HeaderUser";
import { useAuthStore } from "@/store/useAuthStore";

const Header = () => {
  const { user } = useAuthStore();

  if (!user) return null; // ✅ Hide header until user logs in

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
        <div className="flex items-center gap-6">
          <HeaderUser />
          <HeaderCartIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
