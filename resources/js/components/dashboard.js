const { default: axios } = require("axios");

let fIncomes;
let fExpenses;
let vIncomes;
let vExpenses;

$(function () {
    let d = new Date();
    let greeting = d.getHours > 12 ? "¡Buenos días " : "¡Buenas tardes ";
    greeting += user + "!";

    document.getElementById("dashboard-greeting").textContent = greeting;
    document.getElementById("dashboard-balance").textContent = `${new Intl.NumberFormat().format(goal)}$`;

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
    let balance = 0;
    let percentage = 0;
    let remaining = 0;
    let progressBar = document.getElementById("balance-progress");
    let remainingSpan = document.getElementById("dashboard-remaining");

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

    balance = totalIncomes - totalExpenses;

    percentage = (balance * 100) / goal;

    remaining = goal - balance;
    
    progressBar.setAttribute("aria-valuenow", balance);
    progressBar.setAttribute("aria-valuemax", goal);
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${Math.round(percentage)}%`;

    remainingSpan.textContent = `${new Intl.NumberFormat().format(remaining)}$`;
    remainingSpan.classList.add(balance > 0 ? "text-green-500" : "text-red-500");
    remainingSpan.parentElement.classList.remove("opacity-0");
}
