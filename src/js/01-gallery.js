// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: '250ms',
  animationSpeed: '250ms',
  loop: true,
});

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    })
    .join('');
}

// Change code below this line

console.log(galleryItems);
