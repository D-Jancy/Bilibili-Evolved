!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-dark-mode"]=t():e["utils/keymap-dark-mode"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{plugin:function(){return o}});const o={name:"keymap.actions.darkMode",displayName:"快捷键扩展 - 夜间模式",description:'在快捷键的动作列表里添加一个 "夜间模式", 可以通过快捷键切换夜间模式',setup:e=>{let{addData:t,coreApis:{settings:o}}=e;t("keymap.actions",(e=>{e.darkMode={displayName:"夜间模式",run:()=>{const e=o.getComponentSettings("darkMode");e.enabled=!e.enabled}}})),t("keymap.presets",(e=>{e.darkMode=""}))},commitHash:"bdcb42122492aef04ca6c89776d341e1bfd5494c",coreVersion:"2.3.3"};return t=t.plugin}()}));