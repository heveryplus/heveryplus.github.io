if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,c,r)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return s;case"module":return a;default:return e(i)}}))).then((e=>{const i=r(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e0857a97c4229bb31f6beb706c9b6609"},{url:"about/index.html",revision:"c37f0ba742c6c3c5e73195d1ac8a616a"},{url:"archives/2021/11/index.html",revision:"bd58ba47e12e19405159eb134c38c6e6"},{url:"archives/2021/index.html",revision:"31a38ad78dcdece311c6492e68d8cf37"},{url:"archives/index.html",revision:"edfb3defee3cbdc0702c970d93c28754"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"94cd44afc4a71e166e74c1863dd66029"},{url:"categories/Java/index.html",revision:"d4bbdb1bcd4051b1f01cbdc4eb0ed868"},{url:"charts/index.html",revision:"855f68f3d8ddab24b6705e4d0c0761c1"},{url:"css/custom.css",revision:"3eb5d4811b85501f9ebd105accd75500"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"bbb097b9ec9b9c6eaf2aa323c6ab71e6"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"e1295c52830728cf3035dfc2a45263be"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/custom.js",revision:"b0424e463c3f078118b169ac649431d8"},{url:"js/floatpanel.js",revision:"8cca630ec814f1c61c9a63bdd466c2ff"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/sakura.js",revision:"e4a49cc1f66764aa77286d8d65bd6dff"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"6d13a42abc1920e84b20f1bfa5e25f97"},{url:"message/index.html",revision:"1041cd8c8dd7fe99fdf5cdfc6ad781e3"},{url:"music/index-1.html",revision:"0d3adaa1df831eb62e0f9b14a301e1e2"},{url:"music/index.html",revision:"c93a608f9582bb755cc8cbb04e74d539"},{url:"posts/1007916050/index.html",revision:"4916cd10f64f72b1aa12c312ef15e5ea"},{url:"posts/1243066710/index.html",revision:"651af74f128220e8c8f6f06065c42676"},{url:"posts/1484100299/index.html",revision:"0c7c7988e6a8f4b25abbfe3dc1bfe2f0"},{url:"posts/1703937356/index.html",revision:"489934c6f97bd08402763a5d14486a82"},{url:"posts/1857096543/index.html",revision:"7fe7f91f6a85098dd13447b5c2489f30"},{url:"tags/index.html",revision:"1f16dd79260e81f9fb493b1b31d7cbb5"},{url:"tags/JUC/index.html",revision:"bf1ee6f8aad7fb9ff073dbcd1f8c25df"},{url:"tags/线程池/index.html",revision:"9b20cea0d269884824858c6cd3372331"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
