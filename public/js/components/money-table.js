/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/js/components/money-table.js ***!
  \************************************************/
var data;
$(function () {
  axios.get(route).then(function (response) {
    data = response.data;
    data.forEach(function (item) {
      item.created_at = new Date(Date.parse(item.created_at));
    });
    fillMoneyTable();
  });
});

function fillMoneyTable() {
  var table = $("#money-table");

  if (!table || !data) {
    return;
  }

  data.forEach(function (expense) {
    var d = new Date();
    d.setDate(d.getMonth() + (expense.day - 1));
    var dateString = type == "fixed" ? d.toDateString() : expense.created_at.toDateString();
    table.append("\n                        <tr>\n                            <td class=\"p-2 whitespace-nowrap\">\n                                <div class=\"text-left\">".concat(expense.name, "</div>\n                            </td>\n                            <td class=\"p-2 whitespace-nowrap\">\n                                <div class=\"text-left font-medium ").concat(color, " \">\n                                    $").concat(new Intl.NumberFormat().format(expense.value), "\n                                </div>\n                            </td>\n                            <td class=\"p-2 whitespace-nowrap\">\n                                <div class=\"text-left\">").concat(dateString, "</div>\n                            </td>\n                        </tr>\n                        "));
  });
}
/******/ })()
;