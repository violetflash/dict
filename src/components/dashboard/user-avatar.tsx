import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthStore } from '@/store/auth-store';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDevLink } from '@/hooks/use-dev-link';

export function UserAvatar({ hideText, showLogout }: { hideText?: boolean; showLogout?: boolean }) {
  const { user, logout } = useAuthStore();
  const { handleLink } = useDevLink();

  const handleLogout = () => {
    logout(() => handleLink('/'));
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.avatar} alt={user?.name || 'User'} />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        {!hideText && (
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user?.name || 'Пользователь'}</span>
            <span className="text-xs text-muted-foreground">{user?.email}</span>
          </div>
        )}
      </div>
      {showLogout && (
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOut className="h-4 w-4 cursor-pointer" />
        </Button>
      )}
    </div>
  );
}
