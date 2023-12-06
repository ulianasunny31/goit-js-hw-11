import axios from 'axios';
const apiKey = '41103551-afb5440a0c91585482e280fcd';

const params = new URLSearchParams({
  key: apiKey,
  q: searchQuery,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: page,
  per_page: 40,
});

async function search(searchQuery, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/?${params}');
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
}

export { search };
