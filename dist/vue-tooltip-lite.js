(function(e){function t(t){for(var o,i,l=t[0],a=t[1],c=t[2],d=0,s=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},u=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f67":function(e,t,n){"use strict";var o=function(e,t){var n,o=this;return function(){for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];var l=o;clearTimeout(n),n=setTimeout((function(){return e.apply(l,u)}),t)}},r=null,u=null,i=null;t["a"]={bind:function(e,t){var n=document.querySelector("#du-tooltip"),l=t.arg||"bottom",a=0;e.alt=t.value,n||(n=document.createElement("div"),n.id="du-tooltip",document.body.appendChild(n));var c=200,f=null;r=function(){f&&clearTimeout(f),n.innerText=e.alt;var t=e.getBoundingClientRect();console.log(t);var o=t.height,r=o+a,u=0,i=n.getBoundingClientRect();console.log(i),"top"===l?r=-i.height-a:"left"===l?(r=r/2+-i.height/2,u=-i.width-a):"right"===l&&(r=r/2+-i.height/2,u=t.width+a),n.className=l,n.setAttribute("style","top:"+(t.top+r)+"px;left:"+(t.left+u)+"px;opacity: 1")},u=function(){f=setTimeout((function(){n.style.opacity=0}),c)},i=function(e){var t=e.relatedTarget||e.toElement;t&&"HTML"!=t.nodeName||(n.style.opacity=0)},e.addEventListener("mouseleave",u,!1),e.addEventListener("mouseenter",o(r,c),!1),document.addEventListener("mouseout",o(i,c),!1)},unbind:function(e){e.removeEventListener("mouseenter",r,!1),e.removeEventListener("mouseleave",u,!1),document.removeEventListener("mouseout",i,!1)}}},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"install",(function(){return r}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("1f67");n.d(t,"duTooltip",(function(){return o["a"]}));n("8a57");function r(e){e.directive("tooltip",o["a"])}var u={version:"1.0.0",install:r};t["default"]=u;var i=null;"undefined"!==typeof window?i=window.Vue:"undefined"!==typeof e&&(i=e.Vue),i&&i.use(u)}.call(this,n("c8ba"))},"8a57":function(e,t,n){}});
//# sourceMappingURL=vue-tooltip-lite.js.map