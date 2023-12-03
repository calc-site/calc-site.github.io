"use strict";(()=>{var c=class e{static toMoney(i){let o=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");return e.truncate(o,12)}static truncate(i,o){return i.length>o?i.substring(0,o)+"...":i}static parseInt(i){let o=parseInt(i,10);return isNaN(o)?void 0:o}static onRangeChange(i,o,s){let u=document.querySelector("#area-form"),t=u?.querySelector("#area-range"),n=u?.querySelector("#area-input");if(t instanceof HTMLInputElement&&n instanceof HTMLInputElement){n.addEventListener("blur",r=>{if(!(r.target instanceof HTMLInputElement))return;let a=e.parseInt(r.target.value);a!==void 0&&(a>i&&(a=i),a<o&&(a=o),r.target.value=a.toString(),s(a))});let l=(r,a)=>{if(!(r.target instanceof HTMLInputElement))return;let g=e.parseInt(r.target.value);g!==void 0&&(a.value=g.toString(),s(g))};t.addEventListener("input",r=>l(r,n)),n.addEventListener("input",r=>l(r,t))}}static getPricePerArea(i,o,s,u){return i<40?o:i<100?s:u}static getStagePrices(i,o,s,u){let t=n=>e.getPricePerArea(n,o,s,u);return{getPricePerArea:t,getPrice:n=>n*t(n)}}static getStageById(i,o){return i.find(s=>s.id===o)}static isStageSelected(i,o){return i.includes(o)}};var m={minArea:40,maxArea:350,startArea:69,packages:[{id:"minimal",name:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D","\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u0445\u043E\u0447\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430","\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438","\u041F\u0440\u0438\u0432\u044B\u043A \u0441\u0430\u043C \u0440\u0435\u0448\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"],price:1400,packageContent:["\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u043E\u0432\u043A\u0438 \u043D\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438"]},{id:"basic",name:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0434\u0430\u0432\u043D\u043E \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u043C\u0443 \u043D\u0430\u0434\u043E","\u0415\u0441\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u043D \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442","\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043A\u0440\u0443\u043F\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u044D\u0440\u0433\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u043C","\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u0441\u0436\u0430\u0442\u044B\u0435 \u0441\u0440\u043E\u043A\u0438","\u0425\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435"],price:2e3,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0420\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0435\u043D","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0438","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438","\u0412\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u043A\u0438 \u0438 \u0434\u0432\u0435\u0440\u0435\u0439"]},{id:"optimal",name:"\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435","\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430","\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"],price:3e3,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C","\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430"]},{id:"full",name:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",descriptions:["\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435","\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443","\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430","\u0425\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043C\u0435\u0431\u0435\u043B\u0438","\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"],price:3300,packageContent:["\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F","\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B","\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439","\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F","\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F","\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0443\u043F\u0430","\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430","\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA"]}],initialStages:["planning_solution","stylized_solution","visualization","construction_plans","specification"],stages:[{id:"planning_solution",name:"\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",getPricePerArea:e=>c.getPricePerArea(e,500,450,400),getPrice:e=>c.getPricePerArea(e,500,450,400)*e},{id:"stylized_solution",name:"\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",getPricePerArea:e=>c.getPricePerArea(e,550,500,450),getPrice:e=>c.getPricePerArea(e,550,500,450)*e},{id:"visualization",name:"\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",getPricePerArea:e=>c.getPricePerArea(e,700,650,500),getPrice:e=>c.getPricePerArea(e,700,650,500)*e},{id:"panorama",name:"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA",getPricePerArea:e=>c.getPricePerArea(e,600,550,500),getPrice:e=>c.getPricePerArea(e,600,550,500)*e},{id:"construction_plans",name:"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u0435\u0436\u0438",getPricePerArea:e=>c.getPricePerArea(e,1300,1200,1100),getPrice:e=>c.getPricePerArea(e,1300,1200,1100)*e},{id:"specification",name:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C",getPricePerArea:e=>e<40?35e3:5e4,getPrice:e=>e<40?35e3:5e4}]};var d=e=>{let i=()=>{let s=document.querySelectorAll(".description"),u=0;for(let t of s){let n=t.querySelector(".list");n&&n.clientHeight>u&&(u=n.clientHeight)}for(let t of s)t instanceof HTMLElement&&(t.style.minHeight=`${u+60}px`)};i(),addEventListener("resize",()=>i()),c.onRangeChange(e.maxArea,e.minArea,s=>{for(let u of e.packages){let t=document.querySelector(`#${u.id} .area .value`);t&&(t.innerHTML=c.truncate(s.toString(),10));let n=document.querySelector(`#${u.id} .project-price .value`);n&&(n.innerHTML=c.toMoney(u.price*s))}});let o=document.querySelectorAll(".package");for(let s of o)s.querySelector(".package-content .toggle-button")?.addEventListener("click",u=>{u.preventDefault(),s.querySelector(".package-content .content")?.classList.toggle("active");let t=s.querySelector(".package-content .toggle-button i");t&&(t.classList.contains("fa-chevron-circle-right")?(t.classList.remove("fa-chevron-circle-right"),t.classList.add("fa-chevron-circle-down")):(t.classList.remove("fa-chevron-circle-down"),t.classList.add("fa-chevron-circle-right")))})};var f=e=>{let i=[...e.initialStages],o=()=>{let t=document.querySelectorAll(".description"),n=0;for(let a of t){let g=a.querySelector("h2");g&&g.clientHeight>n&&(n=g.clientHeight)}for(let a of t)a instanceof HTMLElement&&(a.style.minHeight=`${n+40}px`);let l=document.querySelector(".stage"),r=document.querySelector(".stages-total");l instanceof HTMLElement&&r instanceof HTMLElement&&(r.style.minHeight=`${l.clientHeight}px`)};o(),addEventListener("resize",()=>o());let s=t=>{let n=0;for(let r of i){let a=c.getStageById(e.stages,r);a&&(n+=a.getPrice(t))}let l=document.querySelector(".total .value");l&&(l.innerHTML=c.toMoney(n))},u=t=>{i.includes(t)?i.splice(i.indexOf(t),1):i.push(t);for(let r of document.querySelectorAll(".stage")){if(!(r instanceof HTMLElement))continue;let a=r.querySelector(".stage-checked");i.includes(r.id)?a?.classList.add("active"):a?.classList.remove("active")}let n=document.querySelector(".stages-list");if(n){let r="";for(let a of i){let g=c.getStageById(e.stages,a);g&&(r+=`<li>${g.name}</li>`)}r===""&&(r="<li>\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E</li>"),n.innerHTML=r}let l=document.querySelector("#area-input");if(l instanceof HTMLInputElement){let r=c.parseInt(l.value);r!==void 0&&s(r)}};for(let t of document.querySelectorAll(".stage"))t.addEventListener("click",n=>{n.target instanceof HTMLElement&&u(t.id)});c.onRangeChange(e.maxArea,e.minArea,t=>{let n=document.querySelector(".hint .value");n&&(n.innerHTML=c.truncate(t.toString(),10));for(let l of e.stages){let r=document.querySelector(`#${l.id} .area .value`);r&&(r.innerHTML=c.truncate(t.toString(),10));let a=document.querySelector(`#${l.id} .price .value`);a&&(a.innerHTML=c.toMoney(l.getPricePerArea(t)));let g=document.querySelector(`#${l.id} .stage-price .value`);g&&(g.innerHTML=c.toMoney(l.getPrice(t)))}s(t)})};(function(){document.querySelector("#packages")&&d(m),document.querySelector("#stages")&&f(m)})();})();
