'use client'
import Link from 'next/link';
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
    const { user, logout } = useAuthStore();
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className="md:hidden bg-white shadow-md z-10 p-4 absolute w-full left-0 top-[60px]">
            <nav>
                <ul className="flex flex-col gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                </ul>
            </nav>

            {/* ✅ User Section */}
            <div className="mt-4 border-t pt-4">
                {user ? (
                <>
                <p className="text-gray-700 font-medium">{user.name}</p>
                <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
            >
                Logout
            </button>
                </>
                ) : (
                <a href="/login" className="text-blue-600 hover:underline">Login</a>
                )}
            </div>
        </div>
    );
};

export default MobileMenu;
