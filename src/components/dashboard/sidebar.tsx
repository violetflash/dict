'use client';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Brain,
  Clock,
  Home,
  LayoutDashboard,
  Menu,
  Settings,
  Trophy,
  ChevronLeft,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { UserAvatar } from './user-avatar';
import { useDevLink } from '@/hooks/use-dev-link';
import { useAuthStore } from '@/store/auth-store';

const navigation = [
  { name: 'Обзор', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Словарь', href: '/dashboard/dictionary', icon: BookOpen },
  { name: 'Тренировка', href: '/dashboard/training', icon: Brain },
  { name: 'Помодоро', href: '/dashboard/pomodoro', icon: Clock },
  { name: 'Достижения', href: '/dashboard/achievements', icon: Trophy },
];

const bottomNavigation = [
  { name: 'Настройки', href: '/dashboard/settings', icon: Settings },
  { name: 'На главную', href: '/', icon: Home },
];

// Компонент для отображения элементов навигации
function NavItems({
  setIsOpen,
  isCollapsed,
}: {
  setIsOpen?: (value: boolean) => void;
  isCollapsed?: boolean;
}) {
  const pathname = usePathname();
  const { handleLink } = useDevLink();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout(() => handleLink('/'));
  };

  return (
    <>
      <div className="flex h-16 items-center justify-between border-b px-6">
        <div className="flex items-center gap-2 overflow-hidden">
          <BookOpen className="h-6 w-6 shrink-0" />
          <span className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {!isCollapsed && 'Dictionary'}
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map(item => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 cursor-pointer overflow-hidden',
                isActive && 'bg-primary/10 hover:bg-primary/20 cursor-default'
              )}
              onClick={() => {
                handleLink(item.href);
                setIsOpen?.(false);
              }}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {!isCollapsed && item.name}
              </span>
            </Button>
          );
        })}
      </nav>

      <div className="border-t px-3 py-4">
        <div className="mb-4 px-3">
          <UserAvatar hideText={isCollapsed} showLogout={false} />
        </div>
        {bottomNavigation.map(item => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 overflow-hidden',
                isActive && 'bg-primary/10 hover:bg-primary/20'
              )}
              onClick={() => {
                handleLink(item.href);
                setIsOpen?.(false);
              }}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {!isCollapsed && item.name}
              </span>
            </Button>
          );
        })}

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 overflow-hidden mt-2"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {!isCollapsed && 'Выйти'}
          </span>
        </Button>
      </div>
    </>
  );
}

// Мобильная навигация
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Открыть меню</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-white dark:bg-slate-950">
          <div className="flex h-full flex-col">
            <NavItems setIsOpen={setIsOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Десктопная навигация
function DesktopNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'hidden md:flex h-full flex-col relative transition-all duration-300 border-r',
        isCollapsed ? 'w-[80px]' : 'w-[220px]',
        'shrink-0'
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'absolute -right-[18px] top-1/2 z-10 rounded-full border shadow-md',
          'bg-white dark:bg-slate-950',
          'hover:bg-accent hover:text-accent-foreground',
          isCollapsed && 'rotate-180',
          '-translate-y-1/2'
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <NavItems isCollapsed={isCollapsed} />
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}
