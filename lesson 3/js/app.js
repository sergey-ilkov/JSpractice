var money,
    nameShop,
    time,
    price

function start() {
    money = prompt("Ваш бюджет?");
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?");
    }
    nameShop = prompt("Название вашего магазина?").toUpperCase();

    time = 21;
}
start()

let mainList = {
    budget: money,
    name: nameShop,
    shopGoods: [],
    employers: {},
    open: false,
    discont: false
}

function chooseGoods() {
    for (let i = 0; i < 3; i++) {
        var question = prompt("Какой тип товаров будем продавать?");
        if (typeof (question) === "string" && typeof (question) != null
            && question != '' && question.length < 50) {
            mainList.shopGoods.push(question);
        } else {
            i--
        }
    }
}
chooseGoods();

const info = document.querySelector('.info');

function workTime(time) {
    if (time < 0) {
        info.innerHTML = 'Такого не может быть!';
    } else if (time > 8 && time < 20) {
        info.innerHTML = 'Время работать!';
    } else if (time < 24) {
        info.innerHTML = 'Уже слишком поздно!';
    } else {
        info.innerHTML = 'В сутках только 24 часа!';
    }
}

workTime(26)

const shop = document.querySelector('.shop');
shop.innerHTML = 'Название магазина: ' + mainList.name;
const budget = document.querySelector('.budget');
budget.innerHTML = 'Бюджет: ' + mainList.budget;
const budgetDay = document.querySelector('.budgetDay');
function calcDay(budget) {
    return budget / 30
}
budgetDay.innerHTML = 'Бюджет на день: ' + calcDay(mainList.budget);

const products = document.querySelector('.products');
products.innerHTML = 'Товар для продажи: ' + mainList.shopGoods;


