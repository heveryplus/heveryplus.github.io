if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,d)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"63094b5493a4f63af1d0894a985ec18a"},{url:"about/index.html",revision:"9cac4e1be91f9660a192d8b4a3eff450"},{url:"archives/2021/11/index.html",revision:"e2a4a16847a7a4bfc75ca91770f91422"},{url:"archives/2021/index.html",revision:"aac37cba91dc8d3bd95579b2766cb166"},{url:"archives/index.html",revision:"40fc51262e407d06fe8f8e9b1946d148"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"d63addad73764d595bdfd6a5fe4fcd17"},{url:"categories/Java/index.html",revision:"79ed85207fc44e34045d91e24f7ad6e2"},{url:"charts/index.html",revision:"4e190f86e826bc094d8d56416e0b1e8c"},{url:"css/custom.css",revision:"61e6deda52fe5d613f7d48551e130b7f"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"20cef800fd908a775f78604ce60cf513"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f4f3b25dd6719aff17b859c6ad53113c"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"59dae507c25d78a047baa7cd97d1490e"},{url:"message/index.html",revision:"6d3ce8c10f0175e42c50bd702dcb2118"},{url:"music/index-1.html",revision:"b88307201b68f48d832ee148bfcd6d3b"},{url:"music/index.html",revision:"89340b80f89686b12a63069fec8f2841"},{url:"posts/1007916050/index.html",revision:"792d2d68197b02dbe26709d02962522b"},{url:"posts/1243066710/index.html",revision:"4c0b52e9781836334f2d620b0394ef48"},{url:"posts/1484100299/index.html",revision:"78d71f88ca131ecd29d3d6b8e1056b1a"},{url:"posts/1703937356/index.html",revision:"622826bc235c88f65ee4d09c2b2e6ec4"},{url:"posts/1857096543/index.html",revision:"998d1e04efa7bfafdc742d1a86edaea0"},{url:"tags/index.html",revision:"202ad9f26ad862557003256814b30b54"},{url:"tags/JUC/index.html",revision:"cde4b0c71cd9a6f06b4927fc41db3c44"},{url:"tags/线程池/index.html",revision:"a62b5a1a37dad33114d6b84b98d0178c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
