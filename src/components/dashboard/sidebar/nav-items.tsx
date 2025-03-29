'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen, Bookmark, Settings } from 'lucide-react';

interface NavItemsProps {
  pathname: string;
  onNavigate: () => void;
}

export function NavItems({ pathname, onNavigate }: NavItemsProps) {
  return (
    <nav className="flex flex-col gap-2 p-4">
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent',
          pathname === '/dashboard' ? 'bg-accent' : 'transparent'
        )}
      >
        <BookOpen className="h-4 w-4" />
        Словарь
      </Link>
      <Link
        href="/dashboard/bookmarks"
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent',
          pathname === '/dashboard/bookmarks' ? 'bg-accent' : 'transparent'
        )}
      >
        <Bookmark className="h-4 w-4" />
        Закладки
      </Link>
      <Link
        href="/dashboard/settings"
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent',
          pathname === '/dashboard/settings' ? 'bg-accent' : 'transparent'
        )}
      >
        <Settings className="h-4 w-4" />
        Настройки
      </Link>
    </nav>
  );
}
