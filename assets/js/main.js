!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=jQuery},function(t,e,n){"use strict";const o=n(0),a=n(2),s=n(3),i=n(4),c=n(5),r=n(6);o((function(){new a,new s,new i,new c,new r}))},function(t,e,n){"use strict";const o=n(0);t.exports=class{constructor(t){"ontouchstart"in window||document.documentElement.classList.add("no-touch"),"ontouchstart"in window&&document.documentElement.classList.add("is-touch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?document.documentElement.classList.add("isEDGE"):o("html").addClass("isIE isIE11")),(/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString())&&document.body.classList.add("browser-safari"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.body.classList.add("darkmode"),"localhost"==window.location.hostname|"127.0.0.1"==window.location.hostname&&document.body.classList.add("localhost"),o(document).ready((function(){o("body").addClass("page-loaded")})),setTimeout((function(){o("body").addClass("page-loaded")}),5e3)}}},function(t,e,n){"use strict";t.exports=class{constructor(t){this.events()}events(){var t,e,n,o=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),a=window.pageYOffset;function s(t){var e=t.getBoundingClientRect(),n=e.top,o=e.top+t.offsetHeight;return n<a+window.innerHeight&&o>0}function i(){for(var t=0;t<o.length;t++)s(o[t])&&(o[t].classList.contains("in-view")||o[t].classList.add("in-view"))}window.addEventListener("scroll",(t=i,e=200,n=Date.now(),function(){n+e-Date.now()<0&&(t(),n=Date.now())})),window.addEventListener("resize",i);for(var c=0;c<o.length;c++){var r=0,l=o[c];r=o[c].getAttribute("data-animate-in-delay")?o[c].getAttribute("data-animate-in-delay")/1e3+"s":0,l.style.transitionDelay=r}i()}}},function(t,e,n){"use strict";const o=n(0);t.exports=class{constructor(t){this.defaults={},this.settings=o.extend(!0,{},this.defaults,t),this.setup()}setup(){const t=o(".category"),e=o(".object-group"),n=o(".arrow-next"),a=o(".arrow-prev");const s=o(".objects-wrap");t.click((function(){let n=o(this),a=n.attr("data-category"),i=o(".object-group[data-objects="+a+"]");t.removeClass("is-active"),n.addClass("is-active"),e.removeClass("is-active"),i.addClass("is-active"),s.animate({scrollLeft:0},0)})),n.click((function(){var t=s.prop("scrollWidth");let e=s.scrollLeft()+(o("#objects").width()-100);e>t&&(e=t-10),s.animate({scrollLeft:e},800)})),a.click((function(){let t=s.scrollLeft()-(o("#objects").width()-100);t<0&&(t=0),s.animate({scrollLeft:t},800)}))}}},function(t,e,n){"use strict";const o=n(0);t.exports=class{constructor(t){this.defaults={},this.settings=o.extend(!0,{},this.defaults,t),this.setup()}setup(){const t=o("#bot"),e=o(".object");o(document).ready((function(){o(".object svg *[id]").each((function(){let t=o(this),e=t.attr("id"),n=t.parents(".object"),a=n.attr("data-object-title");a=a+"-"+e,t.attr("id",a);let s="url(#"+a+")";n.find('*[fill="url(#'+e+')"]').each((function(){o(this).attr("fill",s)}))})),console.log("ready");let t=o(".object--default");t.each((function(){o(this).click()})),console.log(t.length)})),e.click((function(){let e=o(this),n=e.parents(".object-group"),a=(n.attr("data-objects"),e.attr("data-holder")),s=e.attr("data-object-title");if(a=o("#"+a),e.hasClass("is-active"))a.empty(),e.removeClass("is-active"),n.hasClass("has-default")&&(console.log("has default"),n.find(".object.object--default").click()),e.hasClass("hide-antenna")&&(console.log("show antenna"),t.removeClass("hide-antenna"));else{n.find(".object.is-active").removeClass("is-active"),a.empty(),e.addClass("is-active");let o=e.find("svg > g");o.addClass(s);let i=o.clone();a.append(i),e.hasClass("hide-antenna")?t.addClass("hide-antenna"):t.removeClass("hide-antenna")}}))}}},function(t,e,n){"use strict";const o=n(0);t.exports=class{constructor(t){const e=o("#download-file"),n=o("#share-on-twitter"),a=o("#share-modal"),s=o("body"),i=o(".js-toggle-share"),c=(o("#terms-label"),o("#terms"));let r=localStorage.getItem("modthebotterms");function l(t,e,n,a){[].forEach.call(document.querySelectorAll(t),(function(t){try{let d=o("#antenna-holder"),u=o("#antenna-holder").html();var a;o("#bot").hasClass("hide-antenna")&&d.empty();var s=document.getElementById("img"),i=document.getElementById("bot"),c=document.getElementById("canvas"),r=c.getContext("2d");c.setAttribute("width",2e3),c.setAttribute("height",2e3),s.src=f(i);var l=s.src;(a=new Image).width=2e3,a.height=2e3;a.onload=function(){if(r.fillStyle="rgba(255, 255, 255, 0)",r.fillRect(0,0,canvas.width,canvas.height),r.drawImage(a,0,0,2e3,2e3),n){s.src=c.toDataURL();var t=document.createElement("a");t.download="my-dotnet-bot-mod.png",t.href=s.src,document.body.appendChild(t),t.click()}l=(new XMLSerializer).serializeToString(document.getElementById("bot"));window.btoa(l);s.src=c.toDataURL();var o=s.src;o=s.src.split("data:image/png;base64,").pop(),document.getElementById("image-file").value=o,e(),document.getElementById("tweetPreviewImg").src=f(i)},a.src=i?f(i):t.getAttribute("data-svgSource"),o("#bot").hasClass("hide-antenna")&&d.html(u)}catch(t){console.log(t)}}))}function d(){console.log("download image")}function u(){console.log("tweet image"),o("#tweet-preview").removeClass("d-none")}function f(t){var e=(new XMLSerializer).serializeToString(t);return"data:image/svg+xml,"+encodeURIComponent(e)}o(document).ready((function(){"true"==r&&(c.prop("checked",!0),n.removeAttr("disabled"),e.removeAttr("disabled"))})),c.change((function(){o(this).is(":checked")?(console.log("check"),localStorage.setItem("modthebotterms","true"),n.removeAttr("disabled"),e.removeAttr("disabled")):(console.log("uncheck"),localStorage.setItem("modthebotterms","false"),n.attr("disabled","disabled"),e.attr("disabled","disabled"))})),i.click((function(t){t.preventDefault(),a.hasClass("is-active")?(a.removeClass("is-active"),s.removeClass("modal-is-active")):(a.addClass("is-active"),s.addClass("modal-is-active"))})),e.click((function(t){t.preventDefault(),l("#bot",d,!0,!1)})),n.click((function(t){t.preventDefault(),l("#bot",u,!1,!1)}));const m=document.getElementById("tweet-text"),h=document.getElementById("tweet-text-count");let g=function(t){let e=m.value.length;h.innerHTML=e};g(),m.addEventListener("keydown",g,!1),m.addEventListener("keyup",g,!1),m.addEventListener("change",g,!1)}}}]);