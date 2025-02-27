import { create } from "zustand";
import { AuthService } from "@/services/AuthService";

type User = {
  name: string;
  email: string;
  profileImage?: string;
};

type AuthState = {
  user: User | null;
  loginWithGoogle: () => void;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  loginWithGoogle: async () => {
    const user = await AuthService.loginWithGoogle();
    if (user) set({ user });
  },

  loginAsGuest: () => {
    set({ user: AuthService.loginAsGuest() });
  },

  logout: async () => {
    await AuthService.logout();
    set({ user: null }); // ✅ Just clear the user state
  },
}));
