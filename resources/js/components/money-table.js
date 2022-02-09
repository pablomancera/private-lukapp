const { default: axios } = require("axios");

let data;
let ogData;

$(function () {
    let d = new Date();
    axios
        .get(route, {
            params: {
                date: d.toUTCString(),
            },
        })
        .then((response) => {
            ogData = response.data;
            ogData.forEach((item) => {
                item.created_at = new Date(Date.parse(item.created_at));
            });
            data = JSON.parse(JSON.stringify(ogData));
            fillMoneyTable(value.date, 0);
        });

    const cols = document.querySelectorAll(".money-table-col");

    cols.forEach((el) => {
        el.addEventListener("click", (e) => {
            sortTable(e.target.id);
        });
    });

    const search = document.getElementById("money-table-search");
    search.addEventListener("keyup", (e) => {
        searchName(e.target);
    });
});

function searchName(target) {
    if (!target.value) {
        data = JSON.parse(JSON.stringify(ogData));
        fillMoneyTable(value.date, 0);
        return;
    }

    data.length = 0;

    ogData.forEach((el) => {
        let list = rabinKarp(el.name, target.value);
        if (!list.isEmpty()) {
            data.push(el);
        }
    });
    fillMoneyTable(value.name, 0);
}

let lastSelectedCol;
function sortTable(id) {
    let order = lastSelectedCol == id ? 1 : 0;

    if (id == "money-table-name") {
        fillMoneyTable(value.name, order);
    } else if (id == "money-table-value") {
        fillMoneyTable(value.value, order);
    } else if (id == "money-table-date") {
        fillMoneyTable(value.date, order);
    }

    lastSelectedCol = order ? "" : id;
}

function fillMoneyTable(fun, order) {
    let table = $("#money-table");

    let rows = document.querySelectorAll("table tbody tr");

    rows.forEach((el) => {
        el.remove();
    });

    if (!table || !data) {
        return;
    }

    let m = new MaxHeap(data, fun);

    while (m.peek()) {
        let expense = m.extractMax();
        let d = new Date();
        let lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        d.setDate(d.getMonth() + (expense.day - 1));
        
        if (d > lastDay) {
            d = lastDay;
        }

        if (!expense.created_at.toDateString) {
            expense.created_at = new Date(Date.parse(expense.created_at));
        }

        let dateString =
            type == "fixed"
                ? d.toDateString()
                : expense.created_at.toDateString();

        let code = `<tr>
                        <td class="p-2 whitespace-nowrap">
                            <div class="text-left">${expense.name}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                            <div class="text-left font-medium ${color} ">
                                $${new Intl.NumberFormat().format(
                                    expense.value
                                )}
                            </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                            <div class="text-left">${dateString}</div>
                        </td>
                    </tr>`;

        order
            ? table.children("tbody").append(code)
            : table.children("tbody").prepend(code);
    }
}
