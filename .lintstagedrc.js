module.exports = {
  // Файлы JavaScript и TypeScript
  '*.{js,jsx,ts,tsx}': [
    // Запускаем ESLint с автоматическим исправлением
    'eslint --fix',
    // Форматируем код с помощью Prettier
    'prettier --write',
  ],
  // Файлы JSON, CSS и Markdown
  '*.{json,css,md}': [
    // Форматируем только с помощью Prettier
    'prettier --write',
  ],
};
