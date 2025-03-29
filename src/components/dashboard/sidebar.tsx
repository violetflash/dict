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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { UserAvatar } from './user-avatar';
import { useDevLink } from '@/hooks/use-dev-link';

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
function NavItems({ setIsOpen }: { setIsOpen?: (value: boolean) => void }) {
  const pathname = usePathname();
  const { handleLink } = useDevLink();

  return (
    <>
      <div className="flex h-16 items-center justify-between border-b px-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 font-semibold"
          onClick={() => handleLink('/dashboard')}
        >
          <BookOpen className="h-6 w-6" />
          <span>Dictionary</span>
        </Button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map(item => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 cursor-pointer',
                isActive && 'bg-primary/10 hover:bg-primary/20 cursor-default'
              )}
              onClick={() => {
                handleLink(item.href);
                setIsOpen?.(false);
              }}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Button>
          );
        })}
      </nav>

      <div className="border-t px-3 py-4">
        <div className="mb-4 px-3">
          <UserAvatar />
        </div>
        {bottomNavigation.map(item => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3',
                isActive && 'bg-primary/10 hover:bg-primary/20'
              )}
              onClick={() => {
                handleLink(item.href);
                setIsOpen?.(false);
              }}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Button>
          );
        })}
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
  return (
    <div className="hidden md:flex h-full flex-col">
      <NavItems />
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
