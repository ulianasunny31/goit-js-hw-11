import Notiflix from 'notiflix';
import { createImageCard } from './markup.js';
import { search } from './search.js';

//Elements
export const els = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

//Options form Notify
const options = {
  position: 'center-top',
  cssAnimationStyle: 'from-top',
};

let perPage = 40;
let page = 1;
let searchKey = '';
els.loadMoreBtn.classList.add('is-hidden');
els.form.addEventListener('submit', handleSubmit);

//SUBMIT FUNCTION
function handleSubmit(evt) {
  evt.preventDefault();
  els.gallery.innerHTML = '';
  page = 1;

  const { searchQuery } = event.currentTarget.elements;
  searchKey = searchQuery.value.trim().toLowerCase();

  if (searchKey === '') {
    Notiflix.Notify.warning('Please enter a search word');
    return;
  }

  search(searchKey, page, perPage)
    .then(data => {
      const results = data.hits;

      if (data.totalHits === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search word. Please try again.'
        );
      } else {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images`);
        createImageCard(results);
      }

      if (data.totalHits >= perPage) {
        els.loadMoreBtn.classList.remove('is-hidden');
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Opps! Something went wrong :(');
      console.log(error);
    });
  els.loadMoreBtn.addEventListener('click', handleLoad);
  evt.currentTarget.reset();
}

//LOAD MORE FUNCTION
function handleLoad(evt) {
  evt.preventDefault();
  page++;

  search(searchKey, page, perPage)
    .then(data => {
      const results = data.hits;
      const lastPage = Math.ceil(data.totalHits / perPage);

      createImageCard(results);

      if (page === lastPage) {
        els.loadMoreBtn.classList.add('is-hidden');
        Notiflix.Notify.info(
          'We`re soory, but you`ve reached the end of search results.'
        );
        els.loadMoreBtn.removeEventListener('click', onLoadMoreClick);
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}
