# 🔮 Energy-MVP

Веб-прототип для анализа текущего энергетического состояния и совместимости по дате рождения.

## 🚀 Технологии
- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/)
- [Less](https://lesscss.org/)

## 📦 Структура

```
.
├── public/
│   └── illustration.png        # Иллюстрация на главном экране
├── src/
│   ├── App.vue                 # Корневой компонент
│   ├── main.js                 # Точка входа
│   ├── components/
│   │   ├── HeroSection.vue     # Экран с вводом даты и описанием
│   │   └── ResultPanel.vue     # Результаты (пока-заглушка)
│   └── styles/
│       ├── main.less           # Глобальные стили
│       └── theme.less          # Цвета и переменные
```

## 🧪 Запуск локально

```bash
npm install
npm run dev
```

Открой в браузере: [http://localhost:5173](http://localhost:5173)

## 🧩 Планы:
- Интеграция с расчётами
- Анимации и визуализация
- Деплой на Vercel
