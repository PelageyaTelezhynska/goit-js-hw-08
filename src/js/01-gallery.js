// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) return;

  let gallerySimplebox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

refs.gallery.insertAdjacentHTML('beforeend', markup);

refs.gallery.addEventListener('click', onGalleryClick);
