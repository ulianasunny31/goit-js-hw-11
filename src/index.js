import { search } from './search.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;

async function handleSubmit(evt) {
    evt.preventDefault();

    const searchQuery = evt.target.elements.searchQuery.trim();

    if (searchQuery === '') {
        Notify.warning('Please enter a search word');
        return;
    }
    
    gallery.innerHTML = '';
    page = 1;

    try {
        const images = await search(searchQuery, page);

        if (images.length === 0) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        }

        images.map(image => {
            const card = createImageCard(image)
            gallery.append(card);
        })
    }
}

form.addEventListener('submit', handleSubmit);

function createImageCard(image) {
  return `<div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      ${image.likes}<b>Likes</b>
    </p>
    <p class="info-item">
      ${image.views}<b>Views</b>
    </p>
    <p class="info-item">
      ${image.comments}<b>Comments</b>
    </p>
    <p class="info-item">
      ${image.downloads}<b>Downloads</b>
    </p>
  </div>
</div>`;
}
