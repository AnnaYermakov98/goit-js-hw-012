import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="32552782-0d4c86680018457e820f20492",f="https://pixabay.com/api/",p=o=>{const i=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(i),fetch(`${f}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},h=document.querySelector(".gallery");function g(o){const i=o.map(({webformatURL:t,largeImageURL:l,tags:e,likes:r,views:s,comments:a,downloads:c})=>`
        <li class="gallery-item">
            <a href="${l}">
                <img class="gallery-img" src="${t}" alt="${e}">
            </a>
            <div class="info">
            <ul class="info-list">
            <li class="info-item">
            <p class="item-title">Likes</p>
            <p class="item-text">${r}</p></li>
            <li class="info-item"> 
            <p class="item-title">Views</p>
            <p class="item-text">${s}</p></li>
            <li class="info-item">
            <p class="item-title">Comments</p>
            <p class="item-text">${a}</p></li>
            <li class="info-item">
            <p class="item-title">Downloads</p>
            <p class="item-text">${c}</p></li>
            </ul>
            </div>
        </li>
    `).join("");h.insertAdjacentHTML("beforeend",i)}const y=document.querySelector(".gallery"),d=document.querySelector(".form");d.addEventListener("submit",w);const L=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function w(o){o.preventDefault();const i=o.target.elements.searchField.value.toLowerCase().trim();if(!i){n.error({title:"Error",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}y.innerHTML="",p(i).then(t=>{if(console.log(t.hits),t.hits.length===0){n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),L.refresh()}).catch(t=>{console.error("Error fetching photos:",t),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})})}
//# sourceMappingURL=index.js.map
