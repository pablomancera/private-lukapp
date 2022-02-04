/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/lib/max-heap.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxHeap": () => (/* binding */ MaxHeap)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _size = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _parent = /*#__PURE__*/new WeakSet();

var _leftChild = /*#__PURE__*/new WeakSet();

var _rightChild = /*#__PURE__*/new WeakSet();

var _swap = /*#__PURE__*/new WeakSet();

var _siftUp = /*#__PURE__*/new WeakSet();

var _siftDown = /*#__PURE__*/new WeakSet();

var MaxHeap = /*#__PURE__*/function () {
  function MaxHeap() {
    _classCallCheck(this, MaxHeap);

    _classPrivateMethodInitSpec(this, _siftDown);

    _classPrivateMethodInitSpec(this, _siftUp);

    _classPrivateMethodInitSpec(this, _swap);

    _classPrivateMethodInitSpec(this, _rightChild);

    _classPrivateMethodInitSpec(this, _leftChild);

    _classPrivateMethodInitSpec(this, _parent);

    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: []
    });
  }

  _createClass(MaxHeap, [{
    key: "insert",
    value: function insert(obj) {
      var _this$size;

      if (_classPrivateFieldGet(this, _size) < _classPrivateFieldGet(this, _data).length) {
        _classPrivateFieldGet(this, _data)[_classPrivateFieldGet(this, _size)] = obj;
      } else {
        _classPrivateFieldGet(this, _data).push(obj);
      }

      _classPrivateMethodGet(this, _siftUp, _siftUp2).call(this, _classPrivateFieldGet(this, _size));

      _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
    }
  }, {
    key: "extractMax",
    value: function extractMax() {
      var _this$size2;

      if (_classPrivateFieldGet(this, _size) < 1) {
        return null;
      }

      _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) - 1), _this$size2;

      var result = _classPrivateFieldGet(this, _data)[0];

      _classPrivateMethodGet(this, _swap, _swap2).call(this, _classPrivateFieldGet(this, _data)[0], _classPrivateFieldGet(this, _data)[_classPrivateFieldGet(this, _size)]);

      _classPrivateMethodGet(this, _siftDown, _siftDown2).call(this, 0);

      return result;
    }
  }]);

  return MaxHeap;
}();

function _parent2(i) {
  if (i > _classPrivateFieldGet(this, _size)) {
    return null;
  }

  if (i == 0) {
    return _classPrivateFieldGet(this, _data)[0];
  }

  i++;
  return _classPrivateFieldGet(this, _data)[i / 2 - 1];
}

function _leftChild2(i) {
  i++;

  if (2 * i - 1 >= _classPrivateFieldGet(this, _size)) {
    return null;
  }

  return _classPrivateFieldGet(this, _data)[2 * i - 1];
}

function _rightChild2(i) {
  i++;

  if (2 * i >= _classPrivateFieldGet(this, _size)) {
    return null;
  }

  return _classPrivateFieldGet(this, _data)[2 * i];
}

function _swap2(a, b) {
  var tmpObj = a;
  a = b;
  b = a;
}

function _siftUp2(i) {
  if (i > _classPrivateFieldGet(this, _size)) {
    return;
  }

  var parent = _classPrivateMethodGet(this, _parent, _parent2).call(this, i);

  var max = _classPrivateFieldGet(this, _data)[i];
}

function _siftDown2(i) {
  var max = _classPrivateFieldGet(this, _data)[i];

  var next = i;

  var left = _classPrivateMethodGet(this, _leftChild, _leftChild2).call(this, i);

  if (left && left > max) {
    max = left;
    next = 2 * (i + 1) - 1;
  }

  var right = _classPrivateMethodGet(this, _rightChild, _rightChild2).call(this, i);

  if (right && right > max) {
    max = right;
    next = 2 * (i + 1) - 1;
  }

  if (_classPrivateFieldGet(this, _data)[i] != max) {
    _classPrivateMethodGet(this, _swap, _swap2).call(this, _classPrivateFieldGet(this, _data)[i], max);

    _classPrivateMethodGet(this, _siftDown, _siftDown2).call(this, next);
  }
}
/******/ })()
;