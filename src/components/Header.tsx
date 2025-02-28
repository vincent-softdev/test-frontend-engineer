"use client";
import React from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useCartStore } from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

// ✅ Main Header Component
const Header = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <header className={`flex justify-between items-center p-4 bg-white shadow-md ${className}`}>
        {children}
    </header>
);

// ✅ Logo Component
const HeaderLogo = ({ className = "" }: { className?: string }) => (
    <Link href="/" className={`text-2xl font-bold text-gray-800 ${className}`}>
        MyStore
    </Link>
);

// ✅ Navigation Wrapper
const HeaderNav = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <nav className={`flex space-x-6 ${className}`}>{children}</nav>
);

// ✅ Individual Navigation Item
const HeaderNavItem = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link href={href} className={`text-gray-700 hover:text-gray-900 transition ${className}`}>
        {children}
    </Link>
);

// ✅ Actions Wrapper (Cart, Profile)
const HeaderActions = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex space-x-4 items-center ${className}`}>{children}</div>
);

// ✅ Shopping Cart Icon with Badge
const HeaderCart = ({ className = "" }: { className?: string }) => {
    const cartCount = useCartStore((state) => state.cart.reduce((acc, item) => acc + item.quantity, 0));

    return (
        <Link href="/cart" className={`relative ${className}`}>
            <FiShoppingCart size={28} className="text-gray-700 hover:text-gray-900" />
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

// ✅ User Profile (Includes Login & Logout)
const HeaderProfile = ({ className = "" }: { className?: string }) => {
    const { user, logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    if (!user) {
        return <Link href="/login" className={`text-blue-600 hover:underline ${className}`}>Login</Link>;
    }

    return (
        <div className={`flex items-center gap-3 ${className}`}>
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

// ✅ Attach Subcomponents to Header
const HeaderExtended = Object.assign(Header, {
    Logo: HeaderLogo,
    Nav: HeaderNav,
    NavItem: HeaderNavItem,
    Actions: HeaderActions,
    Cart: HeaderCart,
    Profile: HeaderProfile,
});

export { HeaderExtended as Header };
