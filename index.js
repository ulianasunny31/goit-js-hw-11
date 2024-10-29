import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="41103551-afb5440a0c91585482e280fcd",a=document.querySelector(".loader");function f(o,r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;a.style.display="block",fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.hits;t.length===0&&u.error({title:"No pictures found",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0}),a.style.display="none",r(t)}).catch(e=>console.log(e))}const h=new m(".gallery a",{captionsData:"alt"});function y(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:p})=>`
<li class='gallery__item'>
       <a href='${s}'>
        <img src='${n}' alt='${e}'>
      </a>
    <div class="info">
      
      <div class='info-item'> 
       <p class='main-p'>Likes</p> 
       <p>${t}</p>
      </div>
      
      <div class='info-item'> 
       <p class='main-p'>Views</p>
       <p>${i}</p>
      </div>

      <div class='info-item'>
       <p class='main-p'>Comments</p>
       <p>${l}</p>
      </div>

      <div class='info-item'>
       <p class='main-p'>Downloads</p>
       <p>${p}</p>
      </div>
    </div>
</li>
    `).join("");c.innerHTML=r,h.refresh()}const g=document.getElementById("form"),c=document.querySelector(".gallery");g.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="";const r=o.target.elements.searchquery.value;r.trim()!==""&&f(r,y)});
//# sourceMappingURL=index.js.map
