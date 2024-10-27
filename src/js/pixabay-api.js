//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//Declarations
const key = '41103551-afb5440a0c91585482e280fcd';
const loader = document.querySelector('.loader-container');
loader.style.display = 'none';

//Fetch function
function getPictures(query, renderFn) {
  //Creating serach parameters
  const searchParams = new URLSearchParams({
    key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  loader.style.display = 'block';

  //Getting pictures
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      const pictures = data.hits;
      if (pictures.length === 0) {
        iziToast.error({
          title: 'No pictures found',
          message: 'Try another query',
          messageColor: 'black',
          messageSize: '14px',
          position: 'topCenter',
          timeout: 3000,
          closeOnClick: true,
        });
      }
      //rendering
      loader.style.display = 'none';
      renderFn(pictures);
    })
    .catch(e => console.log(e));
}

export default getPictures;
