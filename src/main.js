
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchPhotos} from './js/pixabay-api';
import {renderGallery} from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);


const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

function submitHandler(e) {
    e.preventDefault();
    const query = e.target.elements.searchField.value.toLowerCase().trim();
  
    if (!query) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, you have to type something in the search field. Please try again!',
        position: 'topRight',
      });
      return;
    }
    gallery.innerHTML = '';

    fetchPhotos(query)
        .then(data => {
            console.log(data.hits);
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'Warning',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            } 
            renderGallery(data.hits);
            lightBox.refresh(); 
        })
        .catch(error => {
            console.error('Error fetching photos:', error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
            });
        });
}
