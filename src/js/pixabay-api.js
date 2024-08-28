

const keyId = '32552782-0d4c86680018457e820f20492';
const BASE_URL = 'https://pixabay.com/api/';
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;


export const fetchPhotos = async (searchedQuery, page = 1) => {
    const urlParams = new URLSearchParams({
        key: keyId,
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      });

      const response = await axios.get(`${BASE_URL}?${urlParams}`);
      totalHits = response.data.totalHits;
      return response.data;
    }
// console.log(urlParams);
//       return fetch(`${BASE_URL}?${urlParams}`).then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//     });
// 