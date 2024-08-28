const gallery = document.querySelector('.gallery');

export function renderGallery(images) {

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}">
            </a>
            <div class="info">
            <ul class="info-list">
            <li class="info-item">
            <p class="item-title">Likes</p>
            <p class="item-text">${likes}</p></li>
            <li class="info-item"> 
            <p class="item-title">Views</p>
            <p class="item-text">${views}</p></li>
            <li class="info-item">
            <p class="item-title">Comments</p>
            <p class="item-text">${comments}</p></li>
            <li class="info-item">
            <p class="item-title">Downloads</p>
            <p class="item-text">${downloads}</p></li>
            </ul>
            </div>
        </li>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}
