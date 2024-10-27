import{i as f,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="41103551-afb5440a0c91585482e280fcd",c=document.querySelector(".loader-container");c.style.display="none";function m(o,r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;c.style.display="block",fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.hits;t.length===0&&f.error({title:"No pictures found",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0}),c.style.display="none",r(t)}).catch(e=>console.log(e))}const y=new p(".gallery a");function h(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
      <li class='gallery__item'>
       <a href='${s}'>
        <img src='${i}' alt='${e}'>
      </a>
      <div class="info">
      <p>Likes: ${t}</p>
      <p>Views: ${n}</p>
      <p>Comments: ${l}</p>
      <p>Downloads: ${u}</p>
      </div>
      </li>
    `).join("");a.innerHTML=r,y.refresh()}const g=document.getElementById("form"),a=document.querySelector(".gallery");g.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML="";const r=o.target.elements.searchquery.value;m(r,h)});
//# sourceMappingURL=index.js.map
