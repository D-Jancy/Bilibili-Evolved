!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["touch/combo-like"]=t():e["touch/combo-like"]=t()}(self,(function(){return function(){"use strict";var e,t,o={569:function(e){e.exports=coreApis.spinQuery}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var c=Object.create(null);r.r(c);var u={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){u[e]=function(){return o[e]}}));return u.default=function(){return o},r.d(c,u),c},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){r.d(c,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"touchComboLike",displayName:"三连触摸支持",tags:[componentsTags.touch],enabledByDefault:navigator.maxTouchPoints>0,entry:async()=>{const{select:e}=await Promise.resolve().then(r.t.bind(r,569,23)),t=await e(".ops span.like");if(!t)return;t.style.userSelect="none";const o=(e,o)=>{const n=new CustomEvent(e,o);t.dispatchEvent(n)};let n=!0;t.addEventListener("touchstart",(e=>{e.preventDefault(),n=!0,setTimeout((()=>n=!1),200),o("mousedown",e)})),t.addEventListener("touchend",(e=>{e.preventDefault(),o("mouseup",e),n&&o("click",e)}))},description:{"zh-CN":"为视频页面中的三连操作 (长按点赞) 启用触摸支持."},urlInclude:e.videoUrls,commitHash:"cf8b483555a7c0450a216cdcdc325d577f4790e6"}}(),c=c.component}()}));