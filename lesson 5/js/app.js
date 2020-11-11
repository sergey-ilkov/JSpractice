let money, nameShop, time, price;

function start() {
  money = prompt('Ваш бюджет?');
  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш бюджет?');
  }
  nameShop = prompt('Название вашего магазина?').toUpperCase();

  time = 21;
}
// start();

let mainList = {
  budget: money,
  name: nameShop,
  shopGoods: [],
  employers: {},
  open: false,
  discont: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
    for (let i = 0; i < 3; i++) {
      var question = prompt('Какой тип товаров будем продавать?');
      if (
        typeof question === 'string' &&
        typeof question != null &&
        question != '' &&
        question.length < 50
      ) {
        mainList.shopGoods.push(question);
      } else {
        i--;
      }
    }
  },
  worktime: function workTime(time) {
    if (time < 0) {
      info.innerHTML = 'Такого не может быть!';
    } else if (time > 8 && time < 20) {
      info.innerHTML = 'Время работать!';
      mainList.open = true;
    } else if (time < 24) {
      info.innerHTML = 'Уже слишком поздно!';
    } else {
      info.innerHTML = 'В сутках только 24 часа!';
    }
  },
  dayBudget: function dayBudget() {
    budgetDay.innerHTML = 'Бюджет на день: ' + mainList.budget / 30;
  },
  discontF: function discontF(price) {
    if (mainList.discont) {
      return price * 0.8;
    } else {
      return price;
    }
  },
  hireEmployers: function hireEmployers() {
    for (let i = 0; i < 4; i++) {
      let empl = prompt('Имя работника?');
      empl = empl[0].toUpperCase() + empl.substring(1);
      mainList.employers[i] = empl;
    }
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt('Перечислите через запятую товары');
    while (items == '' || !isNaN(items) || items == null) {
      items = prompt('Перечислите через запятую товары');
    }
    mainList.shopItems = items.split(',');
    mainList.shopItems.push(prompt('Подождите еще '));
    let sortShopitems = mainList.shopItems.sort();
    mainList.listShopItems(sortShopitems);
  },
  listShopItems: function listShopItems(arr) {
    arr.forEach(function (item, i, arr) {
      console.log(`${i + 1} : ${item}`);
    });
    console.log('Наш магазин включает в себя: ');
    for (key in arr) {
      console.log(arr[key]);
    }
  },
};






// console.log(mainList.chooseShopItems());

// const budgetDay = document.querySelector('.budgetDay');

// const discontInf = document.querySelector('.discontInf');
// discontInf.innerHTML = 'Цена: ' + mainList.discontF(100);

// const employersInf = document.querySelector('.employersInf');

// let listEmployer = '';
// for (let key in mainList.employers) {
//   listEmployer += mainList.employers[key] + ', ';
// }

// employersInf.innerHTML = 'Имена работников: ' + listEmployer;

// const info = document.querySelector('.info');

// const shop = document.querySelector('.shop');
// shop.innerHTML = 'Название магазина: ' + mainList.name;
// const budget = document.querySelector('.budget');
// budget.innerHTML = 'Бюджет: ' + mainList.budget;

// const products = document.querySelector('.products');
// products.innerHTML = 'Товар для продажи: ' + mainList.shopGoods;
