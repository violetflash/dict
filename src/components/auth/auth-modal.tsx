'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { useAuthMutations } from '@/hooks/use-auth-mutations';
import {
  loginSchema,
  registerSchema,
  type LoginForm,
  type RegisterForm,
} from '@/services/api/auth';
import { useAuthStore } from '@/store/auth-store';
import { useDevLink } from '@/hooks/use-dev-link';
import { z } from 'zod';

interface AuthModalProps {
  defaultTab?: 'login' | 'register';
  trigger?: React.ReactNode;
}

export function AuthModal({ defaultTab = 'login', trigger }: AuthModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { loginMutation, registerMutation } = useAuthMutations();
  const { login } = useAuthStore();
  const { handleLink } = useDevLink();

  // Форма входа
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Форма регистрации
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      await loginMutation.mutateAsync(data);
      // После успешной мутации вызываем login из store
      login(
        {
          id: '1', // Временный ID для дева
          name: data.email.split('@')[0], // Временное имя для дева
          email: data.email,
        },
        () => {
          handleLink('/dashboard');
        }
      );
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = (data: RegisterForm) => {
    registerMutation.mutate(data, {
      onSuccess: () => setIsOpen(false),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" className="cursor-pointer">
            Войти
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] z-[100] p-6 bg-card border-border shadow-lg dialog-content">
        <DialogHeader>
          <DialogTitle>Добро пожаловать</DialogTitle>
          <DialogDescription>Войдите в свой аккаунт или создайте новый</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue={defaultTab} className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              Вход
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              Регистрация
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-6">
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...loginForm.register('email')}
                  className={cn(
                    loginForm.formState.errors.email &&
                      'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  {...loginForm.register('password')}
                  className={cn(
                    loginForm.formState.errors.password &&
                      'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-destructive">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" isLoading={loginMutation.isPending}>
                Войти
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="register" className="mt-6">
            <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  {...registerForm.register('name')}
                  className={cn(
                    registerForm.formState.errors.name &&
                      'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {registerForm.formState.errors.name && (
                  <p className="text-sm text-destructive">
                    {registerForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="name@example.com"
                  {...registerForm.register('email')}
                  className={cn(
                    registerForm.formState.errors.email &&
                      'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {registerForm.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {registerForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Пароль</Label>
                <Input
                  id="register-password"
                  type="password"
                  {...registerForm.register('password')}
                  className={cn(
                    registerForm.formState.errors.password &&
                      'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {registerForm.formState.errors.password && (
                  <p className="text-sm text-destructive">
                    {registerForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" isLoading={registerMutation.isPending}>
                Зарегистрироваться
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
