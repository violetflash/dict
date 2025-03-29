import { z } from 'zod';

// Схемы валидации
export const loginSchema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type LoginForm = z.infer<typeof loginSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;

export interface User {
  id: string;
  name: string;
  email: string;
}

// Временные моки для API
export const authApi = {
  login: async (data: LoginForm): Promise<User> => {
    // TODO: Заменить на реальный API запрос
    return new Promise(resolve => {
      setTimeout(() => {
        // TODO: Заменить на реальный API запрос
        resolve({ id: '1', name: 'Test User', email: data.email });
      }, 2000); // Увеличиваем задержку до 2 секунд
    });
  },

  register: async (data: RegisterForm): Promise<User> => {
    // TODO: Заменить на реальный API запрос
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: '1', name: data.name, email: data.email });
      }, 1000);
    });
  },
};
