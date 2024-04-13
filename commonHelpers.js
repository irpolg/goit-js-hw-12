import{a as C,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(s,t,i){const l="43270282-4a5d06b91258db09a976f913c",e=new URLSearchParams({key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:i}),o="https://pixabay.com/api/";try{return(await C.get(`${o}?${e}`)).data}catch(r){alert(r.message)}}const P=document.querySelector(".js-list"),$=new L(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"});function y(s){const t=s.map(({id:i,webformatURL:l,tags:e,largeImageURL:o,likes:r,views:w,comments:b,downloads:S})=>`
        <li class="gallery-item" data-id=${i} heigth="200">
            <a class="gallery-link" href=${o}>
                <img src="${l}" alt="${e}" width="360">
            </a>
            <div class="gallery-word">
                <div class="gallery-opis">
                    <h2 class="title">Likes</h2>
                    <p  class="count">${r}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Views</h2>
                    <p  class="count">${w}</p>
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
    `).join("");P.insertAdjacentHTML("beforeend",t),$.refresh()}const h=document.querySelector(".js-search-form"),f=document.querySelector(".js-list"),F=document.querySelector(".loader"),a=document.querySelector(".load-more");document.querySelector(".search-input");let n=1;const p=15;let d="";h.addEventListener("submit",q);a.addEventListener("click",v);u();a.style.display="none";async function q(s){if(s.preventDefault(),f.innerHTML="",g(),d=s.currentTarget.elements.searchImage.value,!d){u(),c.warning({title:"Caution",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"You forgot to enter important data",position:"topRight"});return}try{g(),n=1;const t=await m(d,n,p),i=t.totalHits;if(p*n>=i&&(a.style.display="none"),t.hits.length===0){a.style.display="none",c.warning({title:"Warning",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else y(t.hits),a.style.display="flex",u();h.reset()}catch{g(),c.error({title:"Error",titleColor:"white",backgroundColor:"#FF0000",messageColor:"#FFFFFF",message:"Error! Illegal operation",position:"topRight"}),u()}}function u(){F.classList.add("hidden")}function g(){F.classList.remove("hidden")}async function v(){try{a.style.display="flex",v&&(n+=1);const s=await m(d,n,p),t=s.totalHits;p*n>=t&&(a.style.display="none",c.warning({title:"Warning",titleColor:"black",backgroundColor:"#FFFF00",messageColor:"#000000",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),y(s.hits),E(),h.reset()}catch(s){console.log(s.message)}}function E(){const t=f.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
