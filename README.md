# Spaces Plus

> 🚀 Powerful userscript for Spaces.ru

![Version](https://img.shields.io/github/package-json/v/spaces-dev/spaces-plus?color=blue)
![GitHub](https://img.shields.io/github/license/spaces-dev/spaces-plus?label=license&color=brightgreen)

## Установка

Откройте [страницу скрипта](https://spaces-dev.github.io/spaces-plus/) и нажмите «Установить», либо поставьте файл напрямую: [spaces-plus.user.js](https://spaces-dev.github.io/spaces-plus/spaces-plus.user.js).

Подходит для Tampermonkey, Greasemonkey и Violentmonkey. Скрипт работает на `spaces.ru`, `spcs.me`, `spaces.im`, `gdespaces.com`, `spac1.com`, `spac1.net`, `spaces-blogs.com` и `world76.spcs.bio`.

Настройки открываются со страницы настроек сайта и разбиты на разделы «Контент», «Сбор», «Медиа» и «Интерфейс».

## Возможности

- Пакетное удаление комментариев
- Пакетное удаление читателей. Отметки сохраняются при смене страницы
- Добавление пользователя в закладки. Кнопка сразу показывает, добавлен человек или нет
- Поворот фотографий в просмотрщике, с анимацией. На видео кнопки нет
- Скорость видео: меню в плеере от x0.25 до x2
- Прокрутка страницы справа
- Скрытие правого меню. При включении виджет погоды выключается: они занимают одно место
- Кнопка загрузки трека из плеера. Ссылка обновляется при смене трека
- Внешние ссылки без редиректа
- Сбор бонусных монет
- Сбор кармы
- Панель друзей онлайн в левом меню, от 1 до 20. Нужен включенный раздел «Друзья»
- Старое положение кнопок почты и ленты в шапке
- Ранее использованные смайлики. Список общий для зеркал. С зажатым Shift смайл добавляется или убирается
- Фон сайта: картинка из набора или свой цвет
- Виджет погоды: город, ключ OpenWeather и интервал обновления

## Разработка

1. Установите зависимости `pnpm install`
2. Запустите сервер `pnpm dev`
3. Установите `http://localhost:3000/spaces-plus.user.js`. При сохранении файлов в `src` скрипт пересобирается, страницу Spaces нужно обновить. Менеджерам с `@require` через `file://` подходит `http://localhost:3000/spaces-plus.proxy.user.js`.
4. Для сборки используйте `pnpm build`. В `dist` появятся `spaces-plus.user.js` и `spaces-plus.meta.js`.

Сайт Spaces открывается по HTTPS, поэтому Chrome может блокировать скрипт с `http://localhost`. Включите `chrome://flags/#allow-insecure-localhost`. Смена `@match`, `@grant` или `@name` требует переустановки скрипта.
