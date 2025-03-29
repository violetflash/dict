import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, onSuccess?: () => void) => void;
  logout: (onSuccess?: () => void) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      login: (user, onSuccess) => {
        set({ user, isAuthenticated: true });
        onSuccess?.();
      },
      logout: onSuccess => {
        set({ user: null, isAuthenticated: false });
        onSuccess?.();
      },
      setLoading: loading => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
