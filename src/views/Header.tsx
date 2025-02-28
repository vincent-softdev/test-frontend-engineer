"use client";
import HeaderCartIcon from "@/components/Header/HeaderCartIcon";
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderUser from "@/components/Header/HeaderUser";
import MobileMenu from "@/components/Header/MobileMenu";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

const Header = () => {
  const { user } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Mobile Menu Toggle

  if (!user) return null; // ✅ Hide header until user logs in

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <HeaderLogo />

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <HeaderNav />
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        {/* ✅ User & Cart Section */}
        <div className="hidden md:flex items-center gap-6">
          <HeaderUser />
          <HeaderCartIcon />
        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      {menuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
