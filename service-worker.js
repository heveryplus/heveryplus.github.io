if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,d)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"092536c299d7fb744744f870685b9658"},{url:"about/index.html",revision:"9db1a625a58275f2fc1efe310a089df2"},{url:"archives/2021/11/index.html",revision:"70fd73bf0314d35d3f076bfd58568ae4"},{url:"archives/2021/index.html",revision:"95f00d50253d42278a65956efa3bd860"},{url:"archives/index.html",revision:"a9bb6e2805092eb7d753e98779373be0"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"7bea0e86f5d5d09fb59768a570256f6b"},{url:"categories/Java/index.html",revision:"ec80d38bee441262713698872242bc93"},{url:"charts/index.html",revision:"e36b73583e259e3e7997631a348edbc6"},{url:"css/custom.css",revision:"e3c4fb36b3d31a67d9458d9dfe8e389f"},{url:"css/icon.css",revision:"b5f8ea91df0276985f1f55c4018110da"},{url:"css/index.css",revision:"7dff653fa9e03ade567f506af1c80fcb"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ffeb2cb5d9c689880745efd0cf461d9e"},{url:"js/chocolate.js",revision:"d46f0b0f3b51003ad9fce560c821321f"},{url:"js/custom.js",revision:"bc82c9de1249d82f103d1af8e596e10a"},{url:"js/floatpanel.js",revision:"8cca630ec814f1c61c9a63bdd466c2ff"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/weather.js",revision:"f420e636138abc2f5e029ec6dd130c77"},{url:"link/index.html",revision:"845632dde241cc984f817e4882398942"},{url:"message/index.html",revision:"ef573903d7ea085cd6afd244843dd234"},{url:"music/index-1.html",revision:"3e07f6420993089b5797e1e45d3fe6b7"},{url:"music/index.html",revision:"90ff992084fdfad37887cbf2dc9dc2c4"},{url:"posts/1007916050/index.html",revision:"07ece887bf49c2d9c66433b58fba8d54"},{url:"posts/1243066710/index.html",revision:"4c6ea27fd191833259429b89c3ff1826"},{url:"posts/1484100299/index.html",revision:"57eeac22a4b21103b7642886b1f65a31"},{url:"posts/1703937356/index.html",revision:"dd434c3ef926521f2f0b911931ed47ac"},{url:"posts/1857096543/index.html",revision:"83c2a4ee7b9e50466aeddce697684227"},{url:"tags/index.html",revision:"b87cb152609937a0690eb49780f96af9"},{url:"tags/JUC/index.html",revision:"4c781ae25a604600d93064fe4afd478d"},{url:"tags/线程池/index.html",revision:"93334d2c451d820d4b6db26b2d6579df"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
