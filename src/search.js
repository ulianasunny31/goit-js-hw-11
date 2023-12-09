import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const apiKey = '41103551-afb5440a0c91585482e280fcd';

//FETCH FUNCTION
export async function search(q, page, perPage) {
  const params = new URLSearchParams({
    key: apiKey,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const response = await axios.get(`${BASE_URL}/?${params}`);
  return response.data;
}
