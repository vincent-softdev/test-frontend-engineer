"use client";
import MobileMenu from "@/components/Header/MobileMenu";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import {Header} from "@/components/Header";

const HeaderView = () => {
  const { user } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Mobile Menu Toggle

  if (!user) return null; // ✅ Hide header until user logs in

  return (
    <Header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Header.Logo />

        {/* ✅ Desktop Navigation */}
        <Header.Nav className="hidden md:flex items-center gap-6">
            <Header.NavItem href="/">Home</Header.NavItem>
            <Header.NavItem href="/about">About Me</Header.NavItem>
        </Header.Nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        {/* ✅ User & Cart Section */}
        <div className="hidden md:flex items-center gap-6">
          <Header.Profile />
          <Header.Cart />
        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      {menuOpen && <MobileMenu />}
    </Header>
  );
};

export default HeaderView;
