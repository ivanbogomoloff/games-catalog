# Каталог игр

Фронтенд-каталог браузерных игр на Vite + React + TypeScript.

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Результат сборки — папка `dist/`. Загрузите её содержимое на веб-сервер.

## Структура на сервере

```
/
├── index.html          # собранный сайт
├── assets/             # JS/CSS бандлы
├── games.json          # база данных игр
├── screenshots/        # скриншоты игр
└── play/               # папки с играми
    ├── pixel-dungeon/
    │   └── index.html
    ├── space-invaders-reborn/
    │   └── index.html
    └── ...
```

## Добавление игры

1. Добавьте запись в `public/games.json`:

```json
{
  "id": "my-game",
  "title": "Моя игра",
  "description": "Описание игры",
  "screenshots": [
    "/screenshots/my-game-1.png",
    "/screenshots/my-game-2.png"
  ]
}
```

2. Положите скриншоты в `public/screenshots/`.
3. Разместите файлы игры в `public/play/my-game/`.
4. Пересоберите проект: `npm run build`.

Кнопка «Играть» ведёт на `/play/{id}/`.

## Пагинация

На главной странице отображается до 10 игр. При большем количестве появляется постраничная навигация.
