import{a as f,S as g,i as l}from"./assets/vendor-DOgVoBmD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="32552782-0d4c86680018457e820f20492",w="https://pixabay.com/api/",L=async(t,o=1)=>{const i=new URLSearchParams({key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});return(await f.get(`${w}?${i}`)).data},P=document.querySelector(".gallery");function S(t){const o=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:a,comments:d,downloads:y})=>`
        <li class="gallery-item">
            <a href="${s}">
                <img class="gallery-img" src="${i}" alt="${e}">
            </a>
            <div class="info">
            <ul class="info-list">
            <li class="info-item">
            <p class="item-title">Likes</p>
            <p class="item-text">${r}</p></li>
            <li class="info-item"> 
            <p class="item-title">Views</p>
            <p class="item-text">${a}</p></li>
            <li class="info-item">
            <p class="item-title">Comments</p>
            <p class="item-text">${d}</p></li>
            <li class="info-item">
            <p class="item-title">Downloads</p>
            <p class="item-text">${y}</p></li>
            </ul>
            </div>
        </li>
    `).join("");P.insertAdjacentHTML("beforeend",o)}const v=document.querySelector(".gallery"),b=document.querySelector(".form"),c=document.querySelector(".load-more");b.addEventListener("submit",$);c.addEventListener("click",q);let n=1,u="",p=0;new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});async function $(t){if(t.preventDefault(),u=t.target.elements.searchField.value.toLowerCase().trim(),!u){l.error({title:"Error",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}E(),n=1,await m()}async function q(){n+=1,await m()}async function m(){try{const t=await L(u,n);if(p=t.totalHits,t.hits.length===0&&n===1){l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(t.hits),c.style.display="block",n*15>=p&&(c.style.display="none",l.warning({title:"Warning",message:"Were sorry, but you have reached the end of search results",position:"topRight"}));const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch{x()}}function x(t){l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}function E(){v.innerHTML=""}
//# sourceMappingURL=index.js.map
