import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//Lightbox
const lightbox = new SimpleLightbox('gallery a');

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
      <p>Likes: ${likes}</p>
      <p>Views: ${views}</p>
      <p>Comments: ${comments}</p>
      <p>Downloads: ${downloads}</p>
      </div>
      </li>
    `;
      }
    )
    .join('');

  document.querySelector('.gallery').innerHTML = markup;

  //Renewing the gallery
  lightbox.refresh();
}

export default renderPictures;
