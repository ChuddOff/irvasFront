(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{(()=>{function e(e,n,o){const i=document.querySelector(e),d=document.querySelector(n),r=document.querySelector(o);function c(e){t(e,`${n} div div div form input[name="user_name"]`,`${n} div div div form input[name="user_phone"]`,`${n} div div div form p`)}i.addEventListener("click",(e=>{e.target&&e.preventDefault();const t=document.querySelector(`${n} div div div form button`);t&&t.addEventListener("click",(e=>{c(e)})),document.body.style.overflow="hidden",d.style.display="block"})),r.addEventListener("click",(e=>{e.target&&e.preventDefault(),document.body.style.overflow="",d.style.display="none";const t=document.querySelector(`${n} div div div form button`);t&&t.removeEventListener("click",(e=>{c(e)}))})),d.addEventListener("click",(e=>{if(e.preventDefault(),e.target===d){document.body.style.overflow="",d.style.display="none";const e=document.querySelector(`${n} div div div form button`);e&&e.removeEventListener("click",(e=>{c(e)}))}}))}async function t(e,t,n,o){e.preventDefault();const i=document.querySelector(t),d=document.querySelector(n),r=document.querySelector(o);if(d.value.replace(/[\s+-]/g,""),i.value&&22==d.value.length){try{(await fetch("https://irvas-back-4g64.vercel.app/api/zamer/go",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.value,phone:d.value})})).ok?(console.log("Успех!"),r.textContent="Успешно! Ждите звонка."):(r.textContent="Осечка! Попробуйте ещё раз.",console.log("Всё не занесено 321"))}catch(e){r.textContent="Осечка! Попробуйте ещё раз.",console.log("Ошибка при отправке данных",e)}i.value="",d.value=""}}e(".header_btn_wrap",".popup_engineer",".popup_engineer .popup_close"),e(".contact_us_wrap .phone_link",".popup",".popup .popup_close"),function(e,n){const o=document.querySelector(e);setTimeout((()=>{document.body.style.overflow="hidden",o.style.display="block",document.querySelector(`${e} div div div form button`).addEventListener("click",(n=>{!function(n){t(n,`${e} div div div form input[name="user_name"]`,`${e} div div div form input[name="user_phone"]`,`${e} div div div form p`)}(n)}))}),6e4)}(".popup");const n=document.querySelector(".glazing .container").children;for(let t=2;t<n.length;t++)e(`.${n[t].classList[0]} div:nth-child(1) > div.glazing_price > button`,".popup_calc",".popup_calc div div button.popup_calc_close"),4!=t&&e(`.${n[t].classList[0]} div:nth-child(2) div.glazing_price button`,".popup_calc",".popup_calc div div button.popup_calc_close");document.querySelector("main div div div form button").addEventListener("click",(e=>{t(e,'main div div div form input[name="user_name"]','main div div div form input[name="user_phone"]',"main div div div form p")}));for(let e of document.querySelector(".decoration_content .row").children)document.querySelector(`.${e.classList} div form button`).addEventListener("click",(n=>{t(n,`.${e.classList} div form input[name="user_name"]`,`.${e.classList} div form input[name="user_phone"]`,"main div div div form p")}));document.querySelector(".sale div div div form button").addEventListener("click",(e=>{t(e,'.sale div div div form input[name="user_name"]','.sale div div div form input[name="user_phone"]',"main div div div form p")})),document.querySelector(".popup_calc_end div div div form button").addEventListener("click",(e=>{t(e,'.popup_calc_end div div div form input[name="user_name"]','.popup_calc_end div div div form input[name="user_phone"]',"main div div div form p")})),document.querySelectorAll('input[name="user_phone"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.selectionStart;const t=e.target.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);t[4]&&0!=t[5].length?e.target.value="+"+t[1]+" ("+t[2]+") "+t[3]+" - "+t[4]+" - "+t[5]:t[3]&&0!=t[4].length?e.target.value="+"+t[1]+" ("+t[2]+") "+t[3]+" - "+t[4]:t[2]&&0!=t[3].length?e.target.value="+"+t[1]+" ("+t[2]+") "+t[3]:t[1]&&0!=t[2].length?e.target.value="+"+t[1]+" ("+t[2]:e.target.value="+"+t[1]})),e.addEventListener("click",(e=>{""==e.target.value&&(e.target.value="+7")}))}))})(),(()=>{function e(e,t,n=0){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(i=>{o.forEach((e=>{e.firstElementChild.classList.remove("after_click")})),e.firstElementChild.classList.add("after_click"),function(e,t,n){const o=document.querySelector(e);for(let e of o.children)e.style.display="none";if(n)for(let e=0;e<n;e++)Array.from(o.children)[e].style.display="block";Array.from(o.children)[t+n].style.display="block"}(t,Array.from(o).indexOf(e),n)}))}))}e(".decoration_item",".decoration_content .row"),e(".glazing_block",".glazing .container",2)})()}))})();