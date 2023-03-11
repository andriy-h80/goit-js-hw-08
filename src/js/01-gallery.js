// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}" rel='noreferrer noopener nofollow'>
                    <img class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
            </div> 
        `;
    })
    .join('');
};

let lightboxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // heightRatio: 0.85,
});