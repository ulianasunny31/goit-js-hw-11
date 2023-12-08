import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createImageCard } from './markup.js';
import { search } from './search.js';

export const els = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

//Options form Notify
const options = {
  position: 'center-top',
  cssAnimationStyle: 'from-top',
};

let page = 1;
loadMoreBtn.style.display = 'none';

//SUBMIT FUNCTION
async function handleSubmit(evt) {
  evt.preventDefault();

  const searchQuery = evt.target.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    Notify.warning('Please enter a search word');
    return;
  }

  gallery.innerHTML = '';
  page = 1;

  try {
    const images = await search(searchQuery, page);

    if (images.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search word. Please try again.'
      );
    }

    images.map(image => {
      const card = createImageCard(image);
      gallery.insertAdjacentHTML('beforeend', card.join(''));
    });

    if (images.length === 40) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  } catch (error) {
    Notify.failure(error.message);
    console.log(error);
  }
}

//LOAD MORE FUNCTION
async function handleLoad(evt) {
  evt.preventDefault();
  page++;

  const searchQuery = evt.target.elements.searchQuery.value.trim();

  try {
    const images = await search(searchQuery, page);
    images.map(image => {});

    if (images.length > 0) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }

    if (images.length > images.totalHits) {
      loadMoreBtn.style.display = 'none';
      Notify.warning("You've reached the end of search results", options);
    }
  } catch (error) {
    console.log(error);
  }
}

//Listeners
loadMoreBtn.addEventListener('click', handleLoad);

form.addEventListener('submit', handleSubmit);
