import { Sidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Мобильный хедер */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="container flex h-14 items-center">
          <Sidebar />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Десктопный сайдбар */}
        <aside className="hidden w-64 border-r bg-background md:block">
          <Sidebar />
        </aside>

        {/* Основной контент */}
        <main className="flex-1 overflow-y-auto px-5">
          <div className="container py-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
