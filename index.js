import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="32552782-0d4c86680018457e820f20492",g="https://pixabay.com/api/",y=async(t,i=1)=>{const a=new URLSearchParams({key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}),o=await axios.get(`${g}?${a}`);return o.data.totalHits,o.data},f=document.querySelector(".gallery");function h(t){const i=t.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:s,comments:u,downloads:m})=>`
        <li class="gallery-item">
            <a href="${o}">
                <img class="gallery-img" src="${a}" alt="${e}">
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
            <p class="item-text">${u}</p></li>
            <li class="info-item">
            <p class="item-title">Downloads</p>
            <p class="item-text">${m}</p></li>
            </ul>
            </div>
        </li>
    `).join("");f.insertAdjacentHTML("beforeend",i)}const P=document.querySelector(".gallery"),w=document.querySelector(".form"),l=document.querySelector(".load-more");w.addEventListener("submit",L);l.addEventListener("click",S);new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});async function L(t){if(t.preventDefault(),currentQuery=t.target.elements.searchField.value.toLowerCase().trim(),!currentQuery){n.error({title:"Error",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}b(),currentPage=1,await c()}async function S(){currentPage+=1,await c()}async function c(){try{const t=await y(currentQuery,currentPage);if(totalHits=t.totalHits,t.hits.length===0&&currentPage===1){n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),l.style.display="block",currentPage*15>=totalHits&&(l.style.display="none",n.warning({title:"Warning",message:"Were sorry, but you have reached the end of search results",position:"topRight"}));const{height:i}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}catch(t){v(t)}}function v(t){n.error({title:"Error",message:t.message||"Something went wrong. Please try again later.",position:"topRight"})}function b(){P.innerHTML=""}
//# sourceMappingURL=index.js.map
