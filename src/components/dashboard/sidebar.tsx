'use client';
import Link from 'next/link';
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
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { UserAvatar } from './user-avatar';
import { useAuthStore } from '@/store/auth-store';
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

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  const { handleLink } = useDevLink();

  const NavItems = () => (
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
        <div className="md:hidden">
          <UserAvatar />
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
                'w-full justify-start gap-3 cursor-pointer',
                isActive && 'bg-primary/10 hover:bg-primary/20 cursor-default'
              )}
              onClick={() => {
                handleLink(item.href);
                setIsOpen(false);
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
                setIsOpen(false);
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

  return (
    <>
      {/* Мобильное меню */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-full flex-col">
              <NavItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Десктопное меню */}
      <div className="hidden md:flex h-full flex-col">
        <NavItems />
      </div>
    </>
  );
}
