import{a as C,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(r,t,i){const a="43270282-4a5d06b91258db09a976f913c",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:i}),o="https://pixabay.com/api/";try{return(await C.get(`${o}?${e}`)).data}catch(s){alert(s.message)}}const P=document.querySelector(".js-list"),$=new L(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"});function y(r){const t=r.map(({id:i,webformatURL:a,tags:e,largeImageURL:o,likes:s,views:v,comments:b,downloads:S})=>`
        <li class="gallery-item" data-id=${i} heigth="200">
            <a class="gallery-link" href=${o}>
                <img src="${a}" alt="${e}" width="360">
            </a>
            <div class="gallery-word">
                <div class="gallery-opis">
                    <h2 class="title">Likes</h2>
                    <p  class="count">${s}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Views</h2>
                    <p  class="count">${v}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Comments</h2>
                    <p  class="count">${b}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${S}</p>
                </div>
            </div>
        </li>
    `).join("");P.insertAdjacentHTML("beforeend",t),$.refresh()}const g=document.querySelector(".js-search-form"),f=document.querySelector(".js-list"),F=document.querySelector(".loader"),l=document.querySelector(".load-more");document.querySelector(".search-input");let n=1;const u=15;let d="";g.addEventListener("submit",q);l.addEventListener("click",w);h();l.style.display="none";async function q(r){if(r.preventDefault(),f.innerHTML="",p(),d=r.currentTarget.elements.searchImage.value,!d){c.warning({title:"Caution",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"You forgot to enter important data",position:"topRight"});return}try{p(),n=1;const t=await m(d,n,u),i=t.totalHits;if(u*n>=i&&(l.style.display="none"),t.hits.length===0){c.warning({title:"Warning",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else y(t.hits),l.style.display="flex",h();g.reset()}catch{p(),c.error({title:"Error",titleColor:"white",backgroundColor:"#FF0000",messageColor:"#FFFFFF",message:"Error! Illegal operation",position:"topRight"}),h()}}function h(){F.classList.add("hidden")}function p(){F.classList.remove("hidden")}async function w(){try{l.style.display="flex",w&&(n+=1);const r=await m(d,n,u),t=r.totalHits;u*n>=t&&(l.style.display="none",c.warning({title:"Warning",titleColor:"white",backgroundColor:"#FFFF00",messageColor:"#000000",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),y(r.hits),E(),g.reset()}catch(r){console.log(r.message)}}function E(){const t=f.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
