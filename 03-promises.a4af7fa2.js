function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var r=o("7Y9D8");const l=document.querySelector(".form");function s(e,t){return new Promise(((n,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();const n=Number(l.elements.delay.value),i=Number(l.elements.step.value),o=Number(l.elements.amount.value);if(i<0||n<0||o<=0)return void e(r).Notify.failure("Invalid input values. Please make sure Delay step is >= 0, firstDelay is >= 0, and amount is > 0.");for(let t=1;t<=o;t+=1){s(t,1===t?n:n+(t-1)*i).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.a4af7fa2.js.map