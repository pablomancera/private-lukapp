/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/lib/hash-utils.js ***!
  \****************************************/
window.polyHash = function polyHash(S, p, x) {
  var hash = 0;

  for (var i = S.length - 1; i >= 0; i--) {
    hash = (hash * x + S.charCodeAt(i)) % p;
  }

  return hash;
};

window.precomputeHashes = function precomputeHashes(T, pLength, p, x) {
  var H = [];
  var S = T.slice(T.length - pLength, T.length);
  H[T.length - pLength] = polyHash(S, p, x);
  var y = 1;

  for (var i = 0; i < pLength; i++) {
    y = y * x % p;
  }

  for (var _i = T.length - pLength - 1; _i >= 0; _i--) {
    H[_i] = (x * H[_i + 1] + T.charCodeAt(_i) - y * T.charCodeAt(_i + pLength)) % p;
  }

  return H;
};

window.areEqual = function areEqual(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  for (var i = 0; i < s1.length; i++) {
    if (s1.charAt(i) != s2.charAt(i)) {
      return false;
    }
  }

  return true;
};

window.rabinKarp = function rabinKarp(T, P) {
  var p = 12582917;
  var x = Math.floor(Math.random() * (p - 1) + 1);
  var result = new LinkedList();
  var pHash = polyHash(P, p, x);
  var H = precomputeHashes(T, P.length, p, x);

  for (var i = 0; i <= T.length - P.length; i++) {
    var t = T.slice(i, i + P.length);

    if (pHash != H[i]) {
      continue;
    }

    if (areEqual(t, P)) {
      result.pushBack(i);
      console.log(t);
    }
  }

  return result;
};
/******/ })()
;