import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AuthModal } from '../auth/auth-modal';
import { useAuthStore } from '@/store/auth-store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserAvatar } from '../dashboard/user-avatar';

export function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    // После выхода пользователь останется на главной странице
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Dictionary
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <UserAvatar />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Мой словарь</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Выйти</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <AuthModal defaultTab="login" />
                <AuthModal defaultTab="register" trigger={<Button>Регистрация</Button>} />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
