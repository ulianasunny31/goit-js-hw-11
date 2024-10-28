import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from '../main';

//Lightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

//Rendering function
function renderPictures(pics) {
  const markup = pics
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        //Markup
        return `
<li class='gallery__item'>
       <a href='${largeImageURL}'>
        <img src='${webformatURL}' alt='${tags}'>
      </a>
    <div class="info">
      
      <div class='info-item'> 
       <p class='main-p'>Likes</p> 
       <p>${likes}</p>
      </div>
      
      <div class='info-item'> 
       <p class='main-p'>Views</p>
       <p>${views}</p>
      </div>

      <div class='info-item'>
       <p class='main-p'>Comments</p>
       <p>${comments}</p>
      </div>

      <div class='info-item'>
       <p class='main-p'>Downloads</p>
       <p>${downloads}</p>
      </div>
    </div>
</li>
    `;
      }
    )
    .join('');

  gallery.innerHTML = markup;

  //Renewing the gallery
  lightbox.refresh();
}

export default renderPictures;
