if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,c,r)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return s;case"module":return d;default:return e(i)}}))).then((e=>{const i=r(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c23f0df893de988ffdb781d51ca738bc"},{url:"about/index.html",revision:"d7bae6aae96429e221bdefd7cfefd459"},{url:"archives/2021/11/index.html",revision:"ec5260311e207ee78011a991014d96a2"},{url:"archives/2021/index.html",revision:"d5bc5c70d272542b4656e5e2844a4ddf"},{url:"archives/index.html",revision:"b565630f77d09badfa6ee2de27b41124"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"a4fa28c4c2af2c3a6fc19ad181cc36fe"},{url:"categories/Java/index.html",revision:"dc1a2ddf975321ceae39018128c8ef06"},{url:"charts/index.html",revision:"c308ecb666c5bb0f77d91ce1dd4c9521"},{url:"css/custom.css",revision:"e811094389546e422b08444157f03358"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"7dff653fa9e03ade567f506af1c80fcb"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"de3477ae478931ffb81a3dda0173bc40"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/custom.js",revision:"bc82c9de1249d82f103d1af8e596e10a"},{url:"js/floatpanel.js",revision:"8cca630ec814f1c61c9a63bdd466c2ff"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"e29e5394b4dc7cd576200d0db7d82bbf"},{url:"message/index.html",revision:"c5c63fe745e28db7105fa75192c9f9c3"},{url:"music/index-1.html",revision:"a2381ea4ad7dfdd3bd6ec967ebf524b2"},{url:"music/index.html",revision:"9e7a2762aec008533062ea51957a311b"},{url:"posts/1007916050/index.html",revision:"55a658e71c466b2ce628c88e687906cd"},{url:"posts/1243066710/index.html",revision:"2858371a3b2937b1fd051b3d61a12dec"},{url:"posts/1484100299/index.html",revision:"21f35930187be648a040785386824000"},{url:"posts/1703937356/index.html",revision:"db8dffdafc8b9fef75972cca57463057"},{url:"posts/1857096543/index.html",revision:"b57cc497cf1a77772f881e5cfd644f71"},{url:"tags/index.html",revision:"0d60ed9681cf15d01697d7b4ce00e0bd"},{url:"tags/JUC/index.html",revision:"e0c54d7e1f9b7435e6cd0a8e96cc527d"},{url:"tags/线程池/index.html",revision:"e329121d88f188be3607ce34b88e984e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
