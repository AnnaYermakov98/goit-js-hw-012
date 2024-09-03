import{a as h,S as w,i as c}from"./assets/vendor-DOgVoBmD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const L="32552782-0d4c86680018457e820f20492",S="https://pixabay.com/api/",b=async(t,o=1)=>{const i=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});return(await h.get(`${S}?${i}`)).data},v=document.querySelector(".gallery");function P(t){const o=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:a,comments:f,downloads:g})=>`
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
            <p class="item-text">${f}</p></li>
            <li class="info-item">
            <p class="item-title">Downloads</p>
            <p class="item-text">${g}</p></li>
            </ul>
            </div>
        </li>
    `).join("");v.insertAdjacentHTML("beforeend",o)}const $=document.querySelector(".gallery"),q=document.querySelector(".form"),l=document.querySelector(".load-more"),u=document.querySelector(".loader");q.addEventListener("submit",E);l.addEventListener("click",O);let n=1,p="",y=0;const x=new w(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});async function E(t){if(t.preventDefault(),p=t.target.elements.searchField.value.toLowerCase().trim(),!p){c.error({title:"Error",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"}),d(),l.style.display="none";return}d(),t.target.elements.searchField.value="",n=1,u.style.display="block",await m()}async function O(){n+=1,await m()}async function m(){try{u.style.display="block";const t=await b(p,n);if(y=t.totalHits,t.hits.length===0&&n===1){c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none";return}P(t.hits),x.refresh(),l.style.display="block",n*15>=y&&(l.style.display="none",c.warning({title:"Warning",message:"Were sorry, but you have reached the end of search results",position:"topRight"}));const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch{R()}finally{u.style.display="none"}}function R(t){c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}function d(){$.innerHTML=""}
//# sourceMappingURL=index.js.map
