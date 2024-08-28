const keyId = '32552782-0d4c86680018457e820f20492';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
    const urlParams = new URLSearchParams({
        key: keyId,
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      });
console.log(urlParams);
      return fetch(`${BASE_URL}?${urlParams}`).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
    });
}