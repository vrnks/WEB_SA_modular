const optionsHTTP = {
    baseUrl: 'https://pixabay.com/api/',
    key: '36627448-7990d21daa2cb7c713fa88e55',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    perPage: 20,
    q: 'otter'
  };


document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery-container');

    const apiUrl = `${optionsHTTP.baseUrl}?key=${optionsHTTP.key}&q=${optionsHTTP.q}&image_type=${optionsHTTP.image_type}&orientation=${optionsHTTP.orientation}&safesearch=${optionsHTTP.safesearch}&per_page=${optionsHTTP.perPage}&page=${optionsHTTP.page}`
    

    // Функція для отримання даних з API та рендерингу фотографій.
    async function fetchAndRenderPhotos() {
        try {
            const response = await fetch(apiUrl);
            const result = await response.json();
            const photos = result.hits


            photos.forEach(photo => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                const image = document.createElement('img');
                image.src = photo.webformatURL
                image.alt = photo.alt_description;

                galleryItem.appendChild(image);
                galleryContainer.appendChild(galleryItem);
            });
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }

    // Викликати функцію при завантаженні сторінки.
    fetchAndRenderPhotos();
});
