import { usePathname, useRouter } from 'next/navigation';

/**
 * Хук для обработки навигации в dev-режиме
 *
 * Используется для автоматического добавления параметра dev-auth=true ко всем ссылкам
 * в режиме разработки, чтобы обойти middleware гвард.
 *
 * @returns {Object} Объект с методами и состояниями
 * @property {Function} handleLink - Функция для обработки навигации
 * @property {boolean} isDevMode - Флаг режима разработки
 * @property {string} currentPath - Текущий путь
 *
 * @example
 * const { handleLink } = useDevLink();
 *
 * // В dev-режиме: /dashboard?dev-auth=true
 * // В prod: /dashboard
 * handleLink('/dashboard');
 */
export function useDevLink() {
  const router = useRouter();
  const pathname = usePathname();
  const isDevMode = process.env.NODE_ENV === 'development';

  const handleLink = (href: string) => {
    if (isDevMode) {
      const url = new URL(href, window.location.origin);
      url.searchParams.set('dev-auth', 'true');
      router.push(url.pathname + url.search);
    } else {
      router.push(href);
    }
  };

  return {
    handleLink,
    isDevMode,
    currentPath: pathname,
  };
}
