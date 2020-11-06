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
    discont: true
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

const discontInf = document.querySelector('.discontInf');

function discontF(price) {
    if (mainList.discont) {
        return price * 0.8
    } else {
        return price
    }
}

discontInf.innerHTML = 'Цена: ' + discontF(100);

const employersInf = document.querySelector('.employersInf');

for (let i = 0; i < 4; i++) {
    let empl = prompt("Имя работника?");
    empl = empl[0].toUpperCase() + empl.substring(1);
    mainList.employers[i] = empl;
}

let listEmployer = '';
for (let key in mainList.employers) { listEmployer += mainList.employers[key] + ', '};

employersInf.innerHTML = 'Имена работников: ' + listEmployer;

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

workTime(9)

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


