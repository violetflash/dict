module.exports = {
  // Расширяем базовые конфигурации
  extends: [
    // Базовые правила Next.js
    'next/core-web-vitals',
    // Рекомендуемые правила для TypeScript
    'plugin:@typescript-eslint/recommended',
    // Рекомендуемые правила для React
    'plugin:react/recommended',
    // Рекомендуемые правила для React Hooks
    'plugin:react-hooks/recommended',
    // Отключаем правила ESLint, которые могут конфликтовать с Prettier
    'prettier',
  ],
  // Подключаем плагины
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  // Настраиваем правила
  rules: {
    // Отключаем требование импорта React (не нужно в Next.js)
    'react/react-in-jsx-scope': 'off',
    // Отключаем проверку prop-types (используем TypeScript)
    'react/prop-types': 'off',
    // Отключаем требование явного указания возвращаемого типа
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Предупреждаем о неиспользуемых переменных, кроме начинающихся с _
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Включаем правила Prettier
    'prettier/prettier': 'error',
  },
  // Настройки для плагинов
  settings: {
    react: {
      // Автоматически определяем версию React
      version: 'detect',
    },
  },
};
