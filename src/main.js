
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';

import {fetchPhotos} from './js/pixabay-api';
import {renderGallery} from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
form.addEventListener('submit', submitHandler);
loadMoreBtn.addEventListener('click', loadMorePhotos);


const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

async function submitHandler(e) {
    e.preventDefault();
    currentQuery = e.target.elements.searchField.value.toLowerCase().trim();
  
    if (!currentQuery) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, you have to type something in the search field. Please try again!',
        position: 'topRight',
      });
      return;
    }
    clearGallery();
    currentPage = 1;
    await getPhotos();
  }


async function loadMorePhotos() {
  currentPage += 1;
  await getPhotos();
}

async function getPhotos() {
  try {
    const data = await fetchPhotos(currentQuery, currentPage);
    totalHits = data.totalHits;
    if (data.hits.length === 0 && currentPage === 1) {
      iziToast.warning({
        title: 'Warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
    });
    return;
    }
    renderGallery(data.hits);
    loadMoreBtn.style.display = 'block';

    if(currentPage * 15 >= totalHits) {
loadMoreBtn.style.display = 'none';
iziToast.warning({
  title: 'Warning',
  message: 'Were sorry, but you have reached the end of search results',
  position: 'topRight',
});
    }
    const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
} catch (error) {
    handleError(error);
}
  }


  function handleError(error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  }
  
  // Функция для очистки галереи (определите эту функцию, если её еще нет)
  function clearGallery() {
    gallery.innerHTML = ''; // Очищаем содержимое галереи
  }



//     fetchPhotos(query)
//         .then(data => {
//             console.log(data.hits);
//             if (data.hits.length === 0) {
//                 iziToast.warning({
//                     title: 'Warning',
//                     message: 'Sorry, there are no images matching your search query. Please try again!',
//                     position: 'topRight',
//                 });
//                 return;
//             } 
//             renderGallery(data.hits);
//             lightBox.refresh(); 
//         })
//         .catch(error => {
//             console.error('Error fetching photos:', error);
//             iziToast.error({
//                 title: 'Error',
//                 message: 'An error occurred while fetching images. Please try again later.',
//                 position: 'topRight',
//             });
//         });
// }
