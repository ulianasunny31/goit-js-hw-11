import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { els } from './index.js';

//MARKUP FUNCTION
export function createImageCard(images) {
  const card = images.map(image => {
    return `<div class="photo-card">
  <a href="${image.largeImageURL}" class="lightbox-trigger">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      ${image.likes} <b>Likes</b>
    </p>
    <p class="info-item">
      ${image.views} <b>Views</b>
    </p>
    <p class="info-item">
      ${image.comments} <b>Comments</b>
    </p>
    <p class="info-item">
      ${image.downloads} <b>Downloads</b>
    </p>
  </div>
</div>`;
  });

  els.gallery.insertAdjacentHTML('beforeend', card.join(''));

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
}
