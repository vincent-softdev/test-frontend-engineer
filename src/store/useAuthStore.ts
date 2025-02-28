import { create } from "zustand";
import { AuthService } from "@/services/AuthService";
import { IUser } from "@/types";

// I am not separate this type cause it only used for AuthStore
type AuthState = {
  user: IUser | null;
  loginWithGoogle: () => void;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  //✅ Login with google
  loginWithGoogle: async () => {
    const user = await AuthService.loginWithGoogle();
    if (user) set({ user });
  },
  //✅ as guest
  loginAsGuest: () => {
    set({ user: AuthService.loginAsGuest() });
  },

  logout: async () => {
    await AuthService.logout();
    set({ user: null }); // ✅ Just clear the user state
  },
}));
