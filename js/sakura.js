var stop, staticx, img = new Image;

function
Sakura(t, n, a, i, e) {
  this.x = t, this.y = n, this.s = a, this.r = i, this.fn = e;
}

function
getRandom(t) {
  var n, a;
  switch (t) {
    case'x':
      n = Math.random() * window.innerWidth;
      break;
    case'y':
      n = Math.random() * window.innerHeight;
      break;
    case's':
      n = Math.random();
      break;
    case'r':
      n = 6 * Math.random();
      break;
    case'fnx':
      a = 1 * Math.random() - .5, n = function(t, n) {
        return t + .5 * a - 1.7;
      };
      break;
    case'fny':
      a = 1.5 + .7 * Math.random(), n = function(t, n) {
        return n + a;
      };
      break;
    case'fnr':
      a = .03 * Math.random(), n = function(t) {
        return t + a;
      };
  }
  return n;
}

function
startSakura() {
  requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame;
  var t, n = document.createElement('canvas');
  staticx = !0, n.height = window.innerHeight, n.width = window.innerWidth, n.setAttribute(
      'style',
      'position: fixed;left: 0;top: 0;pointer-events: none;'), n.setAttribute(
      'id', 'canvas_sakura'), document.getElementsByTagName(
      'body')[0].appendChild(n), t = n.getContext('2d');
  for (var a = new SakuraList, i = 0; i < 50; i++) {
    var e, r, o, s, A, h, d;
    r = getRandom('x'), o = getRandom('y'), A = getRandom('r'), s = getRandom(
        's'), h = getRandom('fnx'), d = getRandom('fny'), randomFnR = getRandom(
        'fnr'), (e = new Sakura(r, o, s, A, {x: h, y: d, r: randomFnR})).draw(
        t), a.push(e);
  }
  stop = requestAnimationFrame((function() {
    t.clearRect(0, 0, n.width, n.height), a.update(), a.draw(
        t), stop = requestAnimationFrame(arguments.callee);
  }));
}

function
stopp() {
  if (staticx) {
    var t = document.getElementById('canvas_sakura');
    t.parentNode.removeChild(t), window.cancelAnimationFrame(
        stop), staticx = !1;
  } else startSakura();
}

img.src = 'data:image/png;base64,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', Sakura.prototype.draw = function(t) {
  t.save();
  this.s;
  t.translate(this.x, this.y), t.rotate(this.r), t.drawImage(img, 0, 0,
      40 * this.s, 40 * this.s), t.restore();
}, Sakura.prototype.update = function() {
  this.x = this.fn.x(
      this.x,
      this.y), this.y = this.fn.y(this.y, this.y), this.r = this.fn.r(
      this.r), (this.x > window.innerWidth || this.x < 0 || this.y >
      window.innerHeight || this.y < 0) &&
  (this.r = getRandom('fnr'), Math.random() > .4 ?
      (this.x = getRandom('x'), this.y = 0, this.s = getRandom(
          's'), this.r = getRandom('r')) :
      (this.x = window.innerWidth, this.y = getRandom('y'), this.s = getRandom(
          's'), this.r = getRandom('r')));
}, SakuraList = function() {
  this.list = [];
}, SakuraList.prototype.push = function(t) {
  this.list.push(
      t);
}, SakuraList.prototype.update = function() {
  for (var t = 0, n = this.list.length; t < n; t++) this.list[t].update();
}, SakuraList.prototype.draw = function(t) {
  for (var n = 0, a = this.list.length; n < a; n++) this.list[n].draw(t);
}, SakuraList.prototype.get = function(t) {
  return this.list[t];
}, SakuraList.prototype.size = function() {
  return this.list.length;
}, window.onresize = function() {
  document.getElementById(
      'canvas_snow');
}, img.onload = function() {
  startSakura();
};