!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/disable-details"]=e():t["feeds/disable-details"]=e()}(self,(function(){return function(){var t,e,n={840:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card[data-did] .content {\n  cursor: text;\n}\n.card[data-did] .content .details {\n  font-size: 12px;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n}",""]),t.exports=o},274:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card[data-did] .content .details {\n  display: none;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<t.length;s++){var a=[].concat(t[s]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},94:function(t,e,n){var o=n(840);t.exports="string"==typeof o?o:o.toString()},377:function(t,e,n){var o=n(274);t.exports="string"==typeof o?o:o.toString()},23:function(t){"use strict";t.exports=coreApis.componentApis.feeds.api},163:function(t){"use strict";t.exports=coreApis.style}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){c[t]=function(){return n[t]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return c}});var t=coreApis.utils.urls;let e=!0;const n="disable-feeds-details-style",o=async()=>{const{addImportantStyle:t}=await Promise.resolve().then(r.t.bind(r,163,23)),{default:e}=await Promise.resolve().then(r.t.bind(r,94,23));t(e,n)},c={name:"disableFeedsDetails",displayName:"禁止跳转动态详情",tags:[componentsTags.feeds],urlInclude:t.feedsUrls,description:{"zh-CN":"禁止动态点击后跳转详情页, 方便选择其中的文字."},entry:async()=>{const{addImportantStyle:t}=await Promise.resolve().then(r.t.bind(r,163,23)),{forEachFeedsCard:n}=await Promise.resolve().then(r.t.bind(r,23,23)),{default:i}=await Promise.resolve().then(r.t.bind(r,377,23));t(i,"disable-feeds-details-init-style"),o();n({added:t=>{const{element:n}=t;n.addEventListener("click",(t=>{if(t.ctrlKey||!e)return;const o=dqa(n,".content"),r=t.target;if(r.hasAttribute("click-title"))return;dqa(n,".im-popup").some((t=>t.contains(r)))||o.some((t=>t===r||t.contains(r)))&&t.stopImmediatePropagation()}),{capture:!0});const o=dq(n,".post-content");if(!o)return;if(![".video-container",".bangumi-container",".media-list",".article-container"].some((t=>dq(o,t)))&&!dq(o,".details")&&o.classList.contains("repost")){const t=dq(o,".content");if(!t)return;const e=document.createElement("div");e.classList.add("details"),e.setAttribute("click-title","详情"),e.innerHTML='\n        详情<i class="mdi mdi-chevron-right" click-title></i>\n      ',t.insertAdjacentElement("beforeend",e)}}})},unload:()=>{document.getElementById(n)?.remove(),e=!1},reload:()=>{o(),e=!0},commitHash:"cf8b483555a7c0450a216cdcdc325d577f4790e6"}}(),i=i.component}()}));