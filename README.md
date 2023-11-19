# WEB_SA_modular
HTML-код представляє базову структуру веб-сторінки, яка використовується для реалізації фотогалереї.

`<!DOCTYPE html>`
`<html lang="en">`
`<head>`
`<meta charset="UTF-8">`
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
`<link rel="stylesheet" href="styles.css">`: Посилання на зовнішній файл стилів (CSS)
`<title>Фотогалерея</title>`: Встановлює заголовок вікна браузера
`<body>`
`<div class="gallery-container" id="gallery-container"></div>`: Створює контейнер для фотогалереї. Має клас `gallery-container` для стилізації і ідентифікатор `gallery-container`
`<script src="app.js"></script>`: Посилання на зовнішній файл JavaScript (`app.js`)
`</body>`
`</html>`

CSS-код визначає стилі для веб-сторінки фотогалереї. 

body { margin: 0; padding: 0; }: Встановлює нульові значення для зовнішнього та внутрішнього поля елемента <body>. Усуває стандартні відступи.
.gallery-container { display: flex; flex-wrap: wrap; justify-content: space-around; }: Визначає стилі для контейнера .gallery-container, де розташовані фотографії.
display: flex;: Встановлює контейнер як flex-контейнер, щоб дочірні елементи (.gallery-item) розташовувалися у гнучкому контексті.
flex-wrap: wrap;: Дозволяє елементам переноситися на новий ряд, якщо вони не поміщаються в одному ряду.
justify-content: space-around;: Розташовує фотографії з рівномірним відступом навколо них.
.gallery-item { margin: 10px; }: Задає відступ в 10 пікселів для кожного .gallery-item.
img { max-width: 100%; height: auto; border-radius: 8px; }: Задає стилі для тегу <img>, який використовується для відображення фотографій.
max-width: 100%;: Забезпечує те, що фотографії не будуть розтягуватися за межі свого власного розміру, використовуючи максимальну ширину контейнера.
height: auto;: Забезпечує пропорційність висоти фотографії, так що вона автоматично налаштовується відповідно до зміненої ширини.
border-radius: 8px;: Задає закруглені кути для фотографій.

JavaScript-код виконує ряд дій для отримання та рендерингу фотографій за допомогою API Pixabay при завантаженні сторінки. 

const optionsHTTP = {...}: Об'єкт optionsHTTP містить параметри запиту до API Pixabay. Короткий опис цих параметрів:
baseUrl: Адреса базового URL API Pixabay.
key: API-ключ для доступу до сервісу Pixabay. 
image_type: Тип зображення ('photo').
orientation: Орієнтація зображення ('horizontal').
safesearch: Фільтрація безпечного пошуку (true).
perPage: Кількість фотографій на сторінці (20).
q: Пошуковий запит ('otter').
document.addEventListener('DOMContentLoaded', function () {...}: Ця функція викликається, коли сторінка завантажується повністю. Всі подальші дії відбуваються в межах цього обробника подій.

const apiUrl = ${optionsHTTP.baseUrl}?key=${optionsHTTP.key}&q=${optionsHTTP.q}&image_type=${optionsHTTP.image_type}&orientation=${optionsHTTP.orientation}&safesearch=${optionsHTTP.safesearch}&per_page=${optionsHTTP.perPage}&page=${optionsHTTP.page}: Створює URL для запиту до API Pixabay, використовуючи параметри, вказані в об'єкті optionsHTTP. 

async function fetchAndRenderPhotos() {...}: Асинхронна функція, яка викликається для отримання даних з API Pixabay та рендерингу фотографій на сторінці.
await fetch(apiUrl): Використовується для виконання асинхронного запиту до API за допомогою методу fetch.
await response.json(): Перетворює отримані дані з формату JSON.
const photos = result.hits: Зберігає масив фотографій з результатів запиту.
photos.forEach(photo => {...}): Ітерується через кожну фотографію та створює HTML-елементи для їх відображення.
fetchAndRenderPhotos();: Викликати функцію fetchAndRenderPhotos() при завантаженні сторінки, щоб ініціювати процес отримання та рендерингу фотографій.
