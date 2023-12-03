"use strict";(()=>{var a=class e{static toMoney(r){let c=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");return e.truncate(c,12)}static truncate(r,c){return r.length>c?r.substring(0,c)+"...":r}static parseInt(r){let c=parseInt(r,10);return isNaN(c)?void 0:c}static onRangeChange(r,c,s){let g=document.querySelector("#area-form"),o=g?.querySelector("#area-range"),t=g?.querySelector("#area-input");if(o instanceof HTMLInputElement&&t instanceof HTMLInputElement){t.addEventListener("blur",i=>{if(!(i.target instanceof HTMLInputElement))return;let n=e.parseInt(i.target.value);n!==void 0&&(n>r&&(n=r),n<c&&(n=c),i.target.value=n.toString(),s(n))});let u=(i,n)=>{if(!(i.target instanceof HTMLInputElement))return;let l=e.parseInt(i.target.value);l!==void 0&&(n.value=l.toString(),s(l))};o.addEventListener("input",i=>u(i,t)),t.addEventListener("input",i=>u(i,o))}}static getPricePerArea(r,c,s,g){return r<40?c:r<100?s:g}static getStagePrices(r,c,s,g){let o=t=>e.getPricePerArea(t,c,s,g);return{getPricePerArea:o,getPrice:t=>t*o(t)}}static getStageById(r,c){return r.find(s=>s.id===c)}static isStageSelected(r,c){return r.includes(c)}static getStagesTotal(r,c,s){let g=0;for(let o of c){let t=e.getStageById(r,o);t&&(g+=t.getPrice(s))}return g}};var d={minPackageArea:40,maxPackageArea:350,startPackageArea:69,minStorageArea:28,maxStorageArea:350,startStorageArea:69,packages:[{id:"minimal",name:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u0445\u043E\u0447\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430","\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438","\u041F\u0440\u0438\u0432\u044B\u043A \u0441\u0430\u043C \u0440\u0435\u0448\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"],price:1400,packageContent:["\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u043E\u0432\u043A\u0438 \u043D\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438"]},{id:"basic",name:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0434\u0430\u0432\u043D\u043E \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u043C\u0443 \u043D\u0430\u0434\u043E","\u0415\u0441\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u043D \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442","\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043A\u0440\u0443\u043F\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u044D\u0440\u0433\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u043C","\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u0441\u0436\u0430\u0442\u044B\u0435 \u0441\u0440\u043E\u043A\u0438","\u0425\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435"],price:2e3,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0420\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0435\u043D","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0438","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0412\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u043A\u0438 \u0438 \u0434\u0432\u0435\u0440\u0435\u0439"]},{id:"optimal",name:"\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435","\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430","\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"],price:3e3,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C","\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430"]},{id:"full",name:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435","\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430","\u0425\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043C\u0435\u0431\u0435\u043B\u0438","\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"],price:3300,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0443\u043F\u0430","\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430","\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA"]}],initialStages:["planning_solution"],stages:[{id:"planning_solution",name:"\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",getPricePerArea:e=>a.getPricePerArea(e,500,450,400),getPrice:e=>a.getPricePerArea(e,500,450,400)*e},{id:"stylized_solution",name:"\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",getPricePerArea:e=>a.getPricePerArea(e,550,500,450),getPrice:e=>a.getPricePerArea(e,550,500,450)*e},{id:"visualization",name:"\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",getPricePerArea:e=>a.getPricePerArea(e,700,650,500),getPrice:e=>a.getPricePerArea(e,700,650,500)*e},{id:"panorama",name:"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA",getPricePerArea:e=>a.getPricePerArea(e,600,550,500),getPrice:e=>a.getPricePerArea(e,600,550,500)*e},{id:"construction_plans",name:"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u0435\u0436\u0438",getPricePerArea:e=>a.getPricePerArea(e,1300,1200,1100),getPrice:e=>a.getPricePerArea(e,1300,1200,1100)*e},{id:"specification",name:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C",getPricePerArea:e=>e<40?35e3:5e4,getPrice:e=>e<40?35e3:5e4}]};var f=e=>{let r=()=>{let s=document.querySelectorAll(".description"),g=0;for(let o of s){let t=o.querySelector(".list");t&&t.clientHeight>g&&(g=t.clientHeight)}for(let o of s)o instanceof HTMLElement&&(o.style.minHeight=`${g+60}px`)};r(),addEventListener("resize",()=>r()),a.onRangeChange(e.maxPackageArea,e.minPackageArea,s=>{for(let g of e.packages){let o=document.querySelector(`#${g.id} .area .value`);o&&(o.innerHTML=a.truncate(s.toString(),10));let t=document.querySelector(`#${g.id} .project-price .value`);t&&(t.innerHTML=a.toMoney(g.price*s))}});let c=document.querySelectorAll(".package");for(let s of c)s.querySelector(".package-content .toggle-button")?.addEventListener("click",g=>{g.preventDefault(),s.querySelector(".package-content .content")?.classList.toggle("active");let o=s.querySelector(".package-content .toggle-button i");o&&(o.classList.contains("fa-chevron-circle-right")?(o.classList.remove("fa-chevron-circle-right"),o.classList.add("fa-chevron-circle-down")):(o.classList.remove("fa-chevron-circle-down"),o.classList.add("fa-chevron-circle-right")))})};var p=e=>{let r=[...e.initialStages],c=()=>{let t=document.querySelectorAll(".description"),u=0;for(let l of t){let m=l.querySelector("h2");m&&m.clientHeight>u&&(u=m.clientHeight)}for(let l of t)l instanceof HTMLElement&&(l.style.minHeight=`${u+40}px`);let i=document.querySelector(".stage"),n=document.querySelector(".stages-total");i instanceof HTMLElement&&n instanceof HTMLElement&&(n.style.minHeight=`${i.clientHeight}px`)};c(),addEventListener("resize",()=>c());let s=t=>{let u=a.getStagesTotal(e.stages,r,t),i=document.querySelector(".total .value");i&&(i.innerHTML=a.toMoney(u))},g=t=>{let u=[];for(let i of e.stages)t.includes(i.id)&&u.push(i.id);return u},o=t=>{r.includes(t)?r=r.filter(n=>n!==t):r=g([...r,t]);for(let n of document.querySelectorAll(".stage")){if(!(n instanceof HTMLElement))continue;let l=n.querySelector(".stage-checked");r.includes(n.id)?l?.classList.add("active"):l?.classList.remove("active")}let u=document.querySelector(".stages-list");if(u){let n="";for(let l of r){let m=a.getStageById(e.stages,l);m&&(n+=`<li><i class="fa fa-chevron-circle-down"></i> ${m.name}</li>`)}n===""&&(n="<li>\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E</li>"),u.innerHTML=n}let i=document.querySelector("#area-input");if(i instanceof HTMLInputElement){let n=a.parseInt(i.value);n!==void 0&&s(n)}};for(let t of document.querySelectorAll(".stage"))t.addEventListener("click",u=>{u.target instanceof HTMLElement&&o(t.id)});a.onRangeChange(e.maxPackageArea,e.minPackageArea,t=>{let u=document.querySelector(".hint .value");u&&(u.innerHTML=a.truncate(t.toString(),10));for(let i of e.stages){let n=document.querySelector(`#${i.id} .area .value`);n&&(n.innerHTML=a.truncate(t.toString(),10));let l=document.querySelector(`#${i.id} .price .value`);l&&(l.innerHTML=a.toMoney(i.getPricePerArea(t)));let m=document.querySelector(`#${i.id} .stage-price .value`);m&&(m.innerHTML=a.toMoney(i.getPrice(t)))}s(t)})};(function(){document.querySelector("#packages")&&f(d),document.querySelector("#stages")&&p(d)})();})();
