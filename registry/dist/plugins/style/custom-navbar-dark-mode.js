!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/custom-navbar-dark-mode"]=e():t["style/custom-navbar-dark-mode"]=e()}(self,(function(){return function(){var t,e,n={494:function(t,e,n){var r=n(645)((function(t){return t[1]}));r.push([t.id,".navbar-dark-mode {\n  display: flex;\n}\n.navbar-dark-mode svg {\n  height: 18px;\n  width: 18px;\n  fill: currentColor;\n}",""]),t.exports=r},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,r){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1;var l=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:m(f,e),references:1}),r.push(d)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var a=h++;n=v||(v=u(e)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=c(t,e),u=0;u<n.length;u++){var d=s(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},357:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-dark-mode",attrs:{title:t.dark?"关闭夜间模式":"开启夜间模式"}},[t.dark?n("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.96 47.96"}},[n("path",{attrs:{d:"M24,12A12,12,0,1,0,36,24,12,12,0,0,0,24,12Zm0,20a8,8,0,1,1,8-8A8,8,0,0,1,24,32Z"}}),n("path",{attrs:{d:"M24,9a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V7A2,2,0,0,0,24,9Z"}}),n("path",{attrs:{d:"M36,14a2,2,0,0,0,1.42-.59l2.12-2.12a2,2,0,1,0-2.83-2.83l-2.12,2.12A2,2,0,0,0,36,14Z"}}),n("path",{attrs:{d:"M44,22H41a2,2,0,0,0,0,4h3a2,2,0,1,0,0-4Z"}}),n("path",{attrs:{d:"M37.4,34.61a2,2,0,1,0-2.83,2.82l2.12,2.13a2,2,0,0,0,2.83-2.83Z"}}),n("path",{attrs:{d:"M24,39a2,2,0,0,0-2,2v3a2,2,0,0,0,4,0V41A2,2,0,0,0,24,39Z"}}),n("path",{attrs:{d:"M10.53,34.61,8.41,36.73a2,2,0,0,0,0,2.83,2,2,0,0,0,2.82,0l2.13-2.13a2,2,0,1,0-2.83-2.82Z"}}),n("path",{attrs:{d:"M9,24a2,2,0,0,0-2-2H4a2,2,0,0,0,0,4H7A2,2,0,0,0,9,24Z"}}),n("path",{attrs:{d:"M10.53,13.39a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-3.42L11.23,8.44a2,2,0,0,0-2.82,2.83Z"}})]):n("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M24.48,42.18A18.66,18.66,0,0,1,22.11,5,2,2,0,0,1,23.56,8.6,11.32,11.32,0,1,0,39.4,24.44,2,2,0,0,1,43,25.89,18.68,18.68,0,0,1,24.48,42.18ZM16.36,11.32A14.66,14.66,0,1,0,36.68,31.64,15.35,15.35,0,0,1,15,17.68,15.2,15.2,0,0,1,16.36,11.32Z"}})])])};r._withStripped=!0;var o=n(986),a=Vue.extend({data:()=>({dark:(0,o.getComponentSettings)("darkMode").enabled}),created(){(0,o.addComponentListener)("darkMode",(t=>{this.dark=t}))}}),i=n(379),s=n.n(i),c=n(494),u=n.n(c),d={insert:"head",singleton:!1};s()(u(),d),u().locals;var l=function(t,e,n,r,o,a,i,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}(a,r,[],!1,null,null,null);l.options.__file="registry/lib/plugins/style/custom-navbar-dark-mode/NavbarDarkMode.vue";var f=l.exports},986:function(t){"use strict";t.exports=coreApis.settings}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,o),a.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){i[t]=function(){return n[t]}}));return i.default=function(){return n},o.d(a,i),a},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return function(){"use strict";o.d(a,{plugin:function(){return t}});const t={name:"customNavbar.items.darkMode",displayName:"自定义顶栏 - 夜间模式开关",description:"为自定义顶栏添加一个夜间模式开关, 方便快速切换夜间模式.",async setup(t){let{addData:e}=t;const{getComponentSettings:n}=await Promise.resolve().then(o.t.bind(o,986,23));e("customNavbar.items",(t=>{t.push({name:"darkMode",displayName:"夜间开关",content:()=>Promise.resolve().then(o.bind(o,357)),clickAction:()=>{const t=n("darkMode");t.enabled=!t.enabled}})}))},commitHash:"bdcb42122492aef04ca6c89776d341e1bfd5494c",coreVersion:"2.3.3"}}(),a=a.plugin}()}));