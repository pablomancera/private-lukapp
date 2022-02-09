/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./resources/js/lib/linked-list.js ***!
  \*****************************************/
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListNode = /*#__PURE__*/_createClass(function ListNode() {
  _classCallCheck(this, ListNode);

  _defineProperty(this, "key", void 0);

  _defineProperty(this, "next", void 0);

  _defineProperty(this, "prev", void 0);
});

window.LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    _defineProperty(this, "head", void 0);

    _defineProperty(this, "tail", void 0);

    this.head = null;
    this.tail = null;
  }

  _createClass(LinkedList, [{
    key: "pushFront",
    value: function pushFront(key) {
      var newData = new ListNode();
      newData.prev = null;
      newData.next = this.head;
      newData.key = key;

      if (this.isEmpty()) {
        this.head = newData;
        this.tail = newData;
      } else {
        this.head.prev = newData;
        this.head = newData;
      }
    }
  }, {
    key: "topFront",
    value: function topFront() {
      return this.head;
    }
  }, {
    key: "popFront",
    value: function popFront() {
      var oldData = this.head;

      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return oldData;
    }
  }, {
    key: "pushBack",
    value: function pushBack(key) {
      var newData = new ListNode();
      newData.prev = this.tail;
      newData.next = null;
      newData.key = key;

      if (this.isEmpty()) {
        this.head = newData;
        this.tail = newData;
      } else {
        this.tail.next = newData;
        this.tail = newData;
      }
    }
  }, {
    key: "topBack",
    value: function topBack() {
      return this.tail;
    }
  }, {
    key: "popBack",
    value: function popBack() {
      var oldData = this.tail;

      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      return oldData;
    }
  }, {
    key: "findKey",
    value: function findKey() {
      var data = this.head;

      while (data) {
        if (data.key == key) {
          return true;
        }

        data = data.next;
      }

      return false;
    }
  }, {
    key: "erase",
    value: function erase(index) {
      var data = this.head;

      for (var i = 0; i < index; i++) {
        if (!data) {
          return;
        }

        data = data.next;
      }

      if (data == this.head) {
        this.head = data.next;
      } else if (data == this.tail) {
        this.tail = data.prev;
      } else {
        data.prev.next = data.next;
        data.next.prev = data.prev;
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.head;
    }
  }]);

  return LinkedList;
}();
/******/ })()
;