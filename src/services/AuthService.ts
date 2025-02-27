import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "@/services/firebase";

export const AuthService = {
  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      return {
        name: result.user.displayName || "User",
        email: result.user.email || "",
        profileImage: result.user.photoURL || "",
      };
    } catch (error) {
      console.error("Google Login Failed:", error);
      return null;
    }
  },

  loginAsGuest: () => ({
    name: "Guest",
    email: "guest@example.com",
  }),

  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  },

  subscribeToAuthChanges: (callback: (user: any) => void) => {
    return onAuthStateChanged(auth, callback);
  },
};
