!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/show-upload-time"]=o():e["video/player/show-upload-time"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>p});const t=coreApis.componentApis.define,i=coreApis.observer,n=coreApis.utils,s=coreApis.utils.urls,a=coreApis.componentApis.feeds.api,c=coreApis.componentApis.video.videoInfo,r="显示视频投稿时间",l=(0,coreApis.utils.log.useScopedConsole)(r),p=(0,t.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:r,description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.",tags:[componentsTags.video],urlInclude:s.videoUrls,entry:async()=>{const e=e=>{e.forEach((async e=>{if(!e.item.owner.mark){if(e.item.owner.mark=!0,!e.mark){let o;if(e.mark=!0,e.item.ctime)o=new Date(1e3*e.item.ctime);else{const t=new c.VideoInfo(e.item.aid);await t.fetchInfo(),o=t.createTime}e.name=`${e.name} · ${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`}e.item.owner.name=e.name}}))},o=()=>{const e=dq("#reco_list");let o=(0,a.getVueData)(e);return void 0===o.isOpen&&(o=o.$children[0],void 0===o.isOpen&&(l.log("结构获取失败"),l.log(document.URL),l.log(o))),o};(0,i.urlChange)((async()=>{await(0,n.playerReady)();const t=o().$children.filter((e=>-1===e.$el.className.indexOf("special")));e(t)})),await(0,n.playerReady)(),(0,i.childList)(dq("#reco_list .rec-list"),(async()=>{const t=o();if(t.isOpen){const o=t.$children.filter((e=>-1===e.$el.className.indexOf("special")));e(o)}}))},commitHash:"5b8d9acf1192b0722c73cc99094f808a3bad6993",coreVersion:"2.6.0"});return o=o.component})()));