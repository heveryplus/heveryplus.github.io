if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,a)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"52210245a5a6efa499a093380b980947"},{url:"about/index.html",revision:"8fe6aae9ee875d85efe2dd47ba6c3f5a"},{url:"archives/2021/11/index.html",revision:"a4f8e168dcb5871e88283f133e191599"},{url:"archives/2021/index.html",revision:"91ea9d134a52a7e2b13ce67f67b840d0"},{url:"archives/index.html",revision:"41bacb714b2e2ebd723ce44a404c1fec"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"7692fc1d27be52544d9e2ffa963e3177"},{url:"categories/Java/index.html",revision:"d3153327d86d72cce77c6c75db568134"},{url:"charts/index.html",revision:"70ae39245d2761907458f0d1f5291476"},{url:"css/custom.css",revision:"61e6deda52fe5d613f7d48551e130b7f"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"20cef800fd908a775f78604ce60cf513"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8d29e8ca6e33c725c74c3aadeda49b90"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"6ea869a2a98b44bd3f2ab8c4d24eb4ac"},{url:"message/index.html",revision:"40d6e23ad9af6533437c9a6b6f3b7bfd"},{url:"music/index-1.html",revision:"00a5096a43a155dcc27fc3fdd56185ca"},{url:"music/index.html",revision:"5f0f21463f0c5d61772f655bf524108b"},{url:"posts/1007916050/index.html",revision:"787a02c37825c2be78b5091c7a94461a"},{url:"posts/1243066710/index.html",revision:"bf913d25f27b1f11aa36bf6d9809bd4b"},{url:"posts/24631506/index.html",revision:"cfaa5065c08785d57106ca1acda1dfad"},{url:"tags/index.html",revision:"863112314e4b19392e409fc752cd1b87"},{url:"tags/JUC/index.html",revision:"8e39a967d1da5f16311e331482ac5030"},{url:"tags/线程池/index.html",revision:"bf0b1e85f8bb79c61f484403d386917e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
