if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,c)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"addb40e01b674ac3bc827143adc3edb7"},{url:"about/index.html",revision:"19f8d7f62e7d6f377077d608633e82a7"},{url:"archives/2021/11/index.html",revision:"16b676d7cf1661afd0cc40a771aee12b"},{url:"archives/2021/index.html",revision:"23667e6722dd20d17d068efe885fabe3"},{url:"archives/index.html",revision:"e7f4c2c48c50be001ce83bd8066c233e"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"f343e18f11e0d073bbf2d9faf5e43582"},{url:"categories/Java/index.html",revision:"38a261dc92e9c2b1fee96c418f66b12c"},{url:"charts/index.html",revision:"c0b356d18405227d225844ef7f1eff10"},{url:"css/custom.css",revision:"4a7cc7a4da3a90ce25063d7d6541be22"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"7dff653fa9e03ade567f506af1c80fcb"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"678573867527efc9bde214e8b6247cd7"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/custom.js",revision:"bc82c9de1249d82f103d1af8e596e10a"},{url:"js/floatpanel.js",revision:"8cca630ec814f1c61c9a63bdd466c2ff"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"d36aa502a9d40a4b58a3b51e1724adcb"},{url:"message/index.html",revision:"1049984417f21b3889f5a7c7f43a0224"},{url:"music/index-1.html",revision:"80505ff6988433fffbc535682239345e"},{url:"music/index.html",revision:"74702509ea8d6965c28768f7d5063b30"},{url:"posts/1007916050/index.html",revision:"55a658e71c466b2ce628c88e687906cd"},{url:"posts/1243066710/index.html",revision:"2858371a3b2937b1fd051b3d61a12dec"},{url:"posts/1484100299/index.html",revision:"21f35930187be648a040785386824000"},{url:"posts/1703937356/index.html",revision:"db8dffdafc8b9fef75972cca57463057"},{url:"posts/1857096543/index.html",revision:"b57cc497cf1a77772f881e5cfd644f71"},{url:"tags/index.html",revision:"e0576a7297ad122d954660a00733a9af"},{url:"tags/JUC/index.html",revision:"bbf98d6daeb75a9a5408e0f8c9bc8914"},{url:"tags/线程池/index.html",revision:"db7247159d79b3a7a15cd8d3e6595dd6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
