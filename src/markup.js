import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { els } from './index.js';

//MARKUP FUNCTION
function createImageCard(images) {
  const card = images
    .map(image => {
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
    })
    .join('');

  els.gallery.insertAdjacentHTML('beforeend', card);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

export { createImageCard };
