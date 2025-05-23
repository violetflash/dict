# Конвенция именования веток

## Основные ветки

- `main` - продакшн ветка
- `develop` - ветка разработки

## Ветки для разработки

Формат: `type/description`

### Типы веток

- `feature/` - новая функциональность
- `bugfix/` - исправление багов
- `hotfix/` - срочное исправление в main
- `release/` - подготовка релиза
- `rc-#v` - релизный кандидат (например: rc-1v)

### Правила именования

1. Использовать только строчные буквы
2. Слова разделять дефисом
3. Описание должно быть кратким и понятным
4. Не использовать пробелы и специальные символы

### Примеры

```
feature/add-word-form
feature/implement-pomodoro
bugfix/fix-word-deletion
hotfix/fix-auth-error
release/v1.0.0
rc-1v
rc-2v
```

## Защита веток

- `main` - защищена от прямого пуша, только через MR
- `develop` - защищена от прямого пуша, только через MR
- Остальные ветки - доступны для прямого пуша
