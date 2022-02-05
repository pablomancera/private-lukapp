const { default: axios } = require("axios");

let fIncomes;
let fExpenses;
let vIncomes;
let vExpenses;

$(function () {
    let d = new Date();
    let greeting = d.getHours > 12 ? "¡Buenos días " : "¡Buenas tardes ";
    greeting += user + "!";

    $("#greeting").text(greeting);

    axios
        .get("/expenses/variable", {
            params: {
                date: d.toUTCString(),
            },
        })
        .then((response) => {
            vExpenses = response.data;
            return axios.get("/incomes/variable", {
                params: {
                    date: d.toUTCString(),
                },
            });
        })
        .then((response) => {
            vIncomes = response.data;
            return axios.get("/expenses/fixed");
        })
        .then((response) => {
            fExpenses = response.data;
            return axios.get("/incomes/fixed");
        })
        .then((response) => {
            fIncomes = response.data;
            dashboardInit();
        });
});

function dashboardInit() {
    let totalExpenses = 0;
    let totalIncomes = 0;

    fExpenses.forEach((expense) => {
        totalExpenses += expense.value;
    });
    vExpenses.forEach((expense) => {
        totalExpenses += expense.value;
    });
    fIncomes.forEach(income => {
        totalIncomes += income.value;
    });
    vIncomes.forEach(income => {
        totalIncomes += income.value;
    });
    console.log(totalIncomes - totalExpenses);
}
