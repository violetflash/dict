import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/services/api/auth';
import { useAuthStore } from '@/store/auth-store';

export function useAuthMutations() {
  const { login } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: user => {
      login(user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: user => {
      login(user);
    },
  });

  return {
    loginMutation,
    registerMutation,
  };
}
