//Imports
import getPictures from './js/pixabay-api';
import renderPictures from './js/render-functions';

//Declarations
const form = document.getElementById('form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  //Getting info from the input
  const searchValue = e.target.elements.searchquery.value;
  getPictures(searchValue, renderPictures);
});
