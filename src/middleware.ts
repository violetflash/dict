import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware для защиты роутов приложения
 *
 * Логика работы:
 * 1. Проверяет наличие auth-token в cookies
 * 2. В dev-режиме позволяет обойти защиту через URL-параметр ?dev-auth=true
 * 3. Разрешает доступ к главной странице (/) без авторизации
 * 4. Защищает все остальные роуты, перенаправляя на главную при отсутствии авторизации
 *
 * Исключения (не защищаются):
 * - Главная страница (/)
 * - API роуты (/api/*)
 * - Статические файлы (/_next/static/*, /_next/image/*)
 * - Favicon
 */
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth-token');
  const isHomePage = request.nextUrl.pathname === '/';
  const isDevMode = process.env.NODE_ENV === 'development';
  const isDevAuth = request.nextUrl.searchParams.get('dev-auth') === 'true';

  // В dev-режиме можно обойти гвард через URL-параметр
  if (
    // isDevMode &&
    isDevAuth
  ) {
    return NextResponse.next();
  }

  // Разрешаем доступ к главной странице
  if (isHomePage) {
    return NextResponse.next();
  }

  // Защищаем все остальные роуты
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

/**
 * Конфигурация middleware
 *
 * matcher: Регулярное выражение для определения роутов, к которым применяется middleware
 * - Защищает все роуты
 * - Исключает системные роуты Next.js и статические файлы
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
