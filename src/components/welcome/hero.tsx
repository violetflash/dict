import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/auth/auth-modal';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth-store';
import { useDevLink } from '@/hooks/use-dev-link';
interface HeroProps {
  onLearnMore: () => void;
}

export function Hero({ onLearnMore }: HeroProps) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const { handleLink } = useDevLink();

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Изучайте английский язык
        <br />
        <span className="text-primary">эффективно</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Используйте карточки и интервальное повторение для быстрого запоминания слов
      </p>
      <div className="mt-10 flex justify-center gap-4">
        {isLoading ? (
          <Skeleton className="h-11 w-[88px]" />
        ) : isAuthenticated ? (
          <Button size="lg" onClick={() => handleLink('/dashboard')}>
            Продолжить
          </Button>
        ) : (
          <AuthModal defaultTab="login" trigger={<Button size="lg">Начать</Button>} />
        )}
        <Button size="lg" variant="outline" onClick={onLearnMore}>
          Узнать больше
        </Button>
      </div>
    </section>
  );
}
