import{s as l}from"./assets/xmark-DXjo6iaL.js";import{f as m,i as f}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");let n;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<Date.now()?(o.setAttribute("disabled","true"),o.classList.replace("start-btn-active","start-btn-disable"),f.show({title:"Error!",titleColor:"#ffffff",message:"Please choose a date in the future!",messageColor:"#ffffff",backgroundColor:"#ef4040",iconUrl:l,position:"topRight"})):(o.removeAttribute("disabled"),o.classList.replace("start-btn-disable","start-btn-active"),n=e[0])}};m(r,b);function a(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:d}}o.addEventListener("click",()=>{o.setAttribute("disabled","true"),o.classList.replace("start-btn-active","start-btn-disable"),r.setAttribute("disabled","true");function e(t){document.querySelector("[data-days]").textContent=String(t.days).padStart(2,"0"),document.querySelector("[data-hours]").textContent=String(t.hours).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(t.minutes).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(t.seconds).padStart(2,"0")}e(a(n-Date.now()));const s=setInterval(()=>{const t=a(n-Date.now());e(t),t.days===0&&t.hours===0&&t.minutes===0&&t.seconds===0&&(clearInterval(s),r.removeAttribute("disabled"))},1e3)});
//# sourceMappingURL=1-timer.js.map
