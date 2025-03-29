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
    try {
      if (isDevMode) {
        // Проверяем, является ли href абсолютным URL
        const isAbsoluteUrl = href.startsWith('http://') || href.startsWith('https://');

        if (isAbsoluteUrl) {
          const url = new URL(href);
          url.searchParams.set('dev-auth', 'true');
          router.push(url.pathname + url.search);
        } else {
          // Для относительных путей
          const searchParams = new URLSearchParams();
          searchParams.set('dev-auth', 'true');
          router.push(`${href}?${searchParams.toString()}`);
        }
      } else {
        router.push(href);
      }
    } catch (error) {
      console.error('Error pushing link:', error);
      // В случае ошибки просто переходим по ссылке
      router.push(href);
    }
  };

  return {
    handleLink,
    isDevMode,
    currentPath: pathname,
  };
}
