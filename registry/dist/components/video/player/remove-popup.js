!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/remove-popup"]=o():e["video/player/remove-popup"]=o()}(self,(function(){return function(){var e,o,p={926:function(e,o,p){var t=p(645)((function(e){return e[1]}));t.push([e.id,"body.remove-player-popup-combo-likes .bilibili-player-video-popup-three,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-three-animate,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-follow,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-there-cyc,\nbody.remove-player-popup-combo-likes .bpx-player-popup-three,\nbody.remove-player-popup-combo-likes .bpx-player-popup-animate,\nbody.remove-player-popup-combo-likes .bpx-player-popup-follow,\nbody.remove-player-popup-combo-likes .bpx-player-popup-cyc {\n  display: none !important;\n}\nbody.remove-player-popup-related-videos .bilibili-player-video-link,\nbody.remove-player-popup-related-videos .bilibili-player-link {\n  display: none !important;\n}\nbody.remove-player-popup-votes .bilibili-player-video-popup-vote,\nbody.remove-player-popup-votes .bpx-player-popup-dm-close,\nbody.remove-player-popup-votes .bpx-player-popup-dm-shrink,\nbody.remove-player-popup-votes .bpx-player-popup-vote {\n  display: none !important;\n}\nbody.remove-player-popup-rates .bilibili-player-score {\n  display: none !important;\n}",""]),e.exports=t},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var p=e(o);return o[2]?"@media ".concat(o[2]," {").concat(p,"}"):p})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,p,t){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(t)for(var n=0;n<this.length;n++){
// eslint-disable-next-line prefer-destructuring
var i=this[n][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);t&&r[l[0]]||(p&&(l[2]?l[2]="".concat(p," and ").concat(l[2]):l[2]=p),o.push(l))}},o}},695:function(e,o,p){var t=p(926);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={id:e,exports:{}};return p[e](n,n.exports,r),n.exports}o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(p,t){if(1&t&&(p=this(p)),8&t)return p;if("object"==typeof p&&p){if(4&t&&p.__esModule)return p;if(16&t&&"function"==typeof p.then)return p}var n=Object.create(null);r.r(n);var i={};e=e||[null,o({}),o([]),o(o)];for(var a=2&t&&p;"object"==typeof a&&!~e.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return p[e]}}));return i.default=function(){return p},r.d(n,i),n},r.d=function(e,o){for(var p in o)r.o(o,p)&&!r.o(e,p)&&Object.defineProperty(e,p,{enumerable:!0,get:o[p]})},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";r.d(n,{component:function(){return t}});var e=coreApis.settings,o=coreApis.utils.urls;const p="removePlayerPopup",t={name:p,entry:o=>{let{settings:p,metadata:t}=o;const{options:r}=p,{kebabCase:n}=lodash;Object.keys(r).forEach((o=>{(0,e.addComponentListener)(`${t.name}.${o}`,(e=>{document.body.classList.toggle(`${n(t.name)}-${n(o)}`,e)}),!0)}))},instantStyles:[{name:p,style:()=>Promise.resolve().then(r.t.bind(r,695,23))}],displayName:"删除视频弹窗",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"删除视频播放器中出现的各种弹窗, 类别可在选项中分别选择."},urlInclude:o.playerUrls,options:{votes:{defaultValue:!1,displayName:"投票"},relatedVideos:{defaultValue:!0,displayName:"关联视频"},comboLikes:{defaultValue:!0,displayName:"关注/三连"},rates:{defaultValue:!0,displayName:"评分"}},commitHash:"bdcb42122492aef04ca6c89776d341e1bfd5494c",coreVersion:"2.3.3"}}(),n=n.component}()}));