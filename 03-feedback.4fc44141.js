!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),l=document.querySelector(".feedback-form"),a=document.querySelector("input"),i=document.querySelector("textarea"),u="feedback-form-state",d=JSON.parse(localStorage.getItem(u));l.addEventListener("input",(0,n.throttle)((function(){d={email:a.value,message:i.value},localStorage.setItem(u,JSON.stringify(d))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(d),localStorage.removeItem(u),l.reset(),d={}})),d&&(a.value=d.email,i.value=d.message)}();
//# sourceMappingURL=03-feedback.4fc44141.js.map
