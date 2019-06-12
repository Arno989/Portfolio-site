"use strict";function initNavigation(){var e=document.querySelector(".js-nav-mobile"),t=document.querySelectorAll(".js-nav-trigger");document.querySelector(".ca-row--top")&&(e.style.top="48px");for(var n=t.length-1;n>=0;n--)t[n].addEventListener("click",function(){e.classList.toggle("is-visible")})}function getReadyToRemoveCookie(){var e=document.querySelector(".js-cookie-message"),t=document.querySelector(".js-cookie-button");localStorage.getItem("ok-with-cookies")?e.style.display="none":t.addEventListener("click",function(){e.style.display="none",localStorage.setItem("ok-with-cookies",!0)})}function initVideoPlayer(){var e=document.querySelector(".c-video-player");if(e){var t=e.querySelector(".c-video-player__video"),n=e.querySelector(".c-video-play-button");n.addEventListener("click",function(){t.play(),t.setAttribute("controls","controls"),n.classList.add("is-hidden")})}}!function(){if("undefined"!=typeof window&&window.addEventListener){var e,t=Object.create(null),n=function(){clearTimeout(e),e=setTimeout(s,100)},o=function(){},i=function(){if(window.addEventListener("resize",n,!1),window.addEventListener("orientationchange",n,!1),window.MutationObserver){var e=new MutationObserver(n);e.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),o=function(){try{e.disconnect(),window.removeEventListener("resize",n,!1),window.removeEventListener("orientationchange",n,!1)}catch(e){}}}else document.documentElement.addEventListener("DOMSubtreeModified",n,!1),o=function(){document.documentElement.removeEventListener("DOMSubtreeModified",n,!1),window.removeEventListener("resize",n,!1),window.removeEventListener("orientationchange",n,!1)}},r=function(e){function t(e){if(void 0!==e.protocol)var t=e;else t=document.createElement("a"),t.href=e;return t.protocol.replace(/:/g,"")+t.host}if(window.XMLHttpRequest){var n=new XMLHttpRequest,o=t(location);e=t(e),n=void 0===n.withCredentials&&""!==e&&e!==o?XDomainRequest||void 0:XMLHttpRequest}return n},s=function(){function e(){0===--l&&(o(),i())}function n(e){return function(){!0!==t[e.base]&&(e.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function s(t){return function(){var n=document.body,o=document.createElement("x");t.onload=null,o.innerHTML=t.responseText,(o=o.getElementsByTagName("svg")[0])&&(o.setAttribute("aria-hidden","true"),o.style.position="absolute",o.style.width=0,o.style.height=0,o.style.overflow="hidden",n.insertBefore(o,n.firstChild)),e()}}function u(t){return function(){t.onerror=null,t.ontimeout=null,e()}}var d,a,l=0;o();var c=document.getElementsByTagName("use");for(a=0;a<c.length;a+=1){try{var v=c[a].getBoundingClientRect()}catch(e){v=!1}var m=(d=c[a].getAttribute("href")||c[a].getAttributeNS("http://www.w3.org/1999/xlink","href")||c[a].getAttribute("xlink:href"))&&d.split?d.split("#"):["",""],f=m[0];m=m[1];var h=v&&0===v.left&&0===v.right&&0===v.top&&0===v.bottom;v&&0===v.width&&0===v.height&&!h?(c[a].hasAttribute("href")&&c[a].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",d),f.length&&(!0!==(d=t[f])&&setTimeout(n({useEl:c[a],base:f,hash:m}),0),void 0===d&&void 0!==(m=r(f))&&(d=new m,t[f]=d,d.onload=s(d),d.onerror=u(d),d.ontimeout=u(d),d.open("GET",f),d.send(),l+=1))):h?f.length&&t[f]&&setTimeout(n({useEl:c[a],base:f,hash:m}),0):void 0===t[f]?t[f]=!0:t[f].onload&&(t[f].abort(),delete t[f].onload,t[f]=!0)}c="",l+=1,e()},u=function t(){window.removeEventListener("load",t,!1),e=setTimeout(s,0)};"complete"!==document.readyState?window.addEventListener("load",u,!1):u()}}(),document.addEventListener("DOMContentLoaded",function(){initNavigation(),initVideoPlayer(),getReadyToRemoveCookie();lozad().observe(),"undefined"!=typeof nmct_carousel&&nmct_carousel.initCarousel()});