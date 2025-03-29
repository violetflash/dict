# Словарь

## Описание

Словарь для изучения английского языка. Позволяет:

- Добавлять слова с транскрипцией и переводом
- Создавать наборы слов для изучения
- Изучать слова с помощью карточек
- Отслеживать прогресс изучения

## Технологии

- Next.js 15.2.4
- TypeScript
- TailwindCSS
- ESLint
- Prettier
- Husky
- GitLab CI/CD
- Jira (управление задачами)

## Основные зависимости

- `@tanstack/react-query` - Управление состоянием серверных данных, кэширование и синхронизация
- `zustand` - Легковесное управление состоянием клиентского приложения
- `zod` - Валидация данных и типизация схем
- `react-hook-form` - Управление формами с валидацией
- `axios` - HTTP клиент для работы с API
- `dayjs` - Легковесная библиотека для работы с датами
- `@tanstack/react-query-devtools` - Инструменты разработчика для React Query

## Зависимости для разработки

- `eslint` - Линтер для JavaScript/TypeScript
- `prettier` - Форматирование кода
- `husky` - Git хуки
- `lint-staged` - Запуск линтеров только для измененных файлов
- `@typescript-eslint/eslint-plugin` - ESLint плагин для TypeScript
- `@typescript-eslint/parser` - Парсер TypeScript для ESLint
- `eslint-plugin-react` - ESLint плагин для React
- `eslint-plugin-react-hooks` - ESLint плагин для React Hooks
- `eslint-config-prettier` - Конфигурация ESLint для работы с Prettier
- `eslint-plugin-prettier` - ESLint плагин для Prettier

## Установка

```bash
# Установка зависимостей
pnpm install

# Запуск в режиме разработки
pnpm dev

# Сборка проекта
pnpm build

# Запуск в продакшн режиме
pnpm start
```

## Разработка

### Конвенции

- [Конвенция именования веток](.gitlab/BRANCH_CONVENTION.md)
- [Конвенция коммитов](.gitlab/COMMIT_CONVENTION.md)

### Управление задачами

Задачи создаются в Jira:

- Создайте задачу в Jira
- В коммитах указывайте номер задачи: `feat: add login form DIC-123`
- При создании MR укажите связанную задачу
- Статусы задач автоматически обновляются при создании/обновлении MR

### Pre-commit хуки

При каждом коммите выполняются:

- Проверка имени ветки
- Проверка типов TypeScript
- Форматирование и линтинг измененных файлов

### CI/CD

При создании/обновлении MR в develop/main:

- Установка зависимостей
- Проверка линтером
- Проверка типов
- Сборка проекта
- Деплой (если MR в main)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
