const { default: axios } = require("axios");

let data;

$(function () {
    let d = new Date();
    axios
        .get(route, {
            params: {
                date: d.toUTCString(),
            },
        })
        .then((response) => {
            data = response.data;
            data.forEach((item) => {
                item.created_at = new Date(Date.parse(item.created_at));
            });
            fillMoneyTable(value.date, 0);
        });

    const cols = document.querySelectorAll(".money-table-col");

    cols.forEach((el) => {
        el.addEventListener("click", (e) => {
            sortTable(e.target.id);
        });
    });
});

let lastSelectedCol;
function sortTable(id) {
    let rows = document.querySelectorAll("table tbody tr");

    let order = lastSelectedCol == id ? 1 : 0;

    rows.forEach((el) => {
        el.remove();
    });

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

    if (!table || !data) {
        return;
    }

    let m = new MaxHeap(data, fun);

    while (m.peek()) {
        let expense = m.extractMax();
        let d = new Date();
        d.setDate(d.getMonth() + (expense.day - 1));

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
