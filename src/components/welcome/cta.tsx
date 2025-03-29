import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AuthModal } from '@/components/auth/auth-modal';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth-store';
import { useDevLink } from '@/hooks/use-dev-link';

export function CTA() {
  const { isAuthenticated, isLoading } = useAuthStore();
  const { handleLink } = useDevLink();

  return (
    <section className="py-20 text-center">
      <Card className="max-w-2xl mx-auto bg-background/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle>
            {isLoading ? (
              <Skeleton className="h-8 w-32 mx-auto" />
            ) : (
              `Готовы ${isAuthenticated ? 'продолжить' : 'начать'}?`
            )}
          </CardTitle>
          <CardDescription>
            {isLoading ? (
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
            ) : isAuthenticated ? (
              'Вернитесь к изучению английского с Dictionary'
            ) : (
              'Присоединяйтесь к тысячам пользователей, которые уже изучают английский с Dictionary'
            )}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          {isLoading ? (
            <Skeleton className="h-11 w-[140px]" />
          ) : isAuthenticated ? (
            <Button size="lg" onClick={() => handleLink('/dashboard')}>
              Перейти в приложение
            </Button>
          ) : (
            <AuthModal defaultTab="register" trigger={<Button size="lg">Создать аккаунт</Button>} />
          )}
        </CardFooter>
      </Card>
    </section>
  );
}
