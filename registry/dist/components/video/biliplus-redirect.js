!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/biliplus-redirect"]=t():e["video/biliplus-redirect"]=t()}(self,(function(){return function(){"use strict";var e={592:function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{attrs:{href:e.url,target:"_blank",tabindex:"-1"}},[o("DefaultWidget",{attrs:{name:"转到BiliPlus",icon:"biliplus",disabled:!e.url}})],1)};i._withStripped=!0;var n=coreApis.observer,r=coreApis.ui;const c=/\/(video|medialist\/play)\/([^\/]+\/)?(av[\d]+|BV.+)/i,s=[{condition:()=>"space.bilibili.com"===window.location.host,getUrl:e=>document.URL.replace("space.bilibili.com/",`${e}/space/`)},{condition:()=>"space.bilibili.com"===window.location.host,getUrl:e=>document.URL.replace("space.bilibili.com/",`${e}/space/`)},{condition:()=>document.URL.includes("/bangumi/play"),getUrl:(e,t)=>((0,n.videoChange)((()=>{const o=unsafeWindow.aid||document.querySelector(".av-link,.info-sec-av").innerText.replace(/[aAvV]/g,""),i=`https://${e}/video/av${o}/`;document.URL!==i?t(i):t("")})),`https://${e}${window.location.pathname}${window.location.search}`)},{condition:()=>c.test(document.URL),getUrl:e=>`https://${e}/video/${document.URL.match(c)[3]}/`}];var l=function(e,t,o,i,n,r,c,s){var l,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=o,a._compiled=!0),i&&(a.functional=!0),r&&(a._scopeId="data-v-"+r),c?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},a._ssrRegister=l):n&&(l=s?function(){n.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(a.functional){a._injectStyles=l;var d=a.render;a.render=function(e,t){return l.call(t),d(e,t)}}else{var u=a.beforeCreate;a.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:a}}(Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({url:""}),created(){const e="www.biliplus.com",t=e=>this.url=e,o=s.find((e=>e.condition()));o?t(o.getUrl(e,t)):(0,n.videoChange)((()=>{this.url=document.URL.replace(window.location.host,e)}))}}),i,[],!1,null,null,null);l.options.__file="registry/lib/components/video/biliplus-redirect/BiliplusRedirect.vue";var a=l.exports}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){o.d(i,{component:function(){return e}});const e={name:"biliplusRedirect",displayName:"BiliPlus 跳转支持",description:{"zh-CN":"在视频 / 番剧 / 空间中, 可以从功能中的按钮点击转到 BiliPlus 上对应的页面."},urlInclude:[...coreApis.utils.urls.videoAndBangumiUrls,"//space.bilibili.com"],entry:none,tags:[componentsTags.video,componentsTags.utils],widget:{component:()=>Promise.resolve().then(o.bind(o,592)).then((e=>e.default))},commitHash:"9af80667371fe8f3d99ad301fccc32b45b9d4678"}}(),i=i.component}()}));