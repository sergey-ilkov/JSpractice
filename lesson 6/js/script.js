let open_btn = document.getElementById('open-btn'),
  name_value = document.querySelector('.name-value'),
  budget_value = document.querySelector('.budget-value'),
  goods_value = document.querySelector('.goods-value'),
  items_value = document.querySelector('.items-value'),
  employers_value = document.querySelector('.employers-value'),
  discount_value = document.querySelector('.discount-value'),
  isopen_value = document.querySelector('.isopen-value'),
  goods_item = document.querySelectorAll('.goods-item'),
  goods_btn = document.getElementsByTagName('button')[1],
  budget_btn = document.getElementsByTagName('button')[2],
  employers_btn = document.getElementsByTagName('button')[3],
  choose_item = document.querySelector('.choose-item'),
  time_value = document.querySelector('.time-value'),
  count_budget_value = document.querySelector('.count-budget-value'),
  hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money, price;

open_btn.addEventListener('click', () => {
  money = prompt('Ваш бюджет?');
  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш бюджет?');
  }
  budget_value.textContent = money;
  name_value.textContent = prompt('Название вашего магазина?').toUpperCase();
});

goods_btn.addEventListener('click', () => {
  for (let i = 0; i < goods_item.length; i++) {
    let a = goods_item[i].value;

    if (typeof a === 'string' && typeof a != null && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
      goods_value.textContent = mainList.shopGoods;
    } else {
      i--;
    }
  }
});

choose_item.addEventListener('change', () => {
  let items = choose_item.value;
  if (items != '' && isNaN(items)) {
    mainList.shopItems = items.split(',');
    mainList.shopItems.sort();
    items_value.textContent = mainList.shopItems;
  }
});

time_value.addEventListener('change', () => {
  let time = time_value.value;
  if (time < 0) {
    console.log('Такого не может быть!');
    mainList.open = false;
  } else if (time > 8 && time < 20) {
    console.log('Время работать!');
    mainList.open = true;
  } else if (time < 24) {
    console.log('Уже слишком поздно!');
    mainList.open = false;
  } else {
    console.log('В сутках только 24 часа!');
    mainList.open = false;
  }
  if (mainList.open) {
    isopen_value.style.backgroundColor = 'green';
  } else {
    isopen_value.style.backgroundColor = 'red';
  }
});

budget_btn.addEventListener('click', () => {
  count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
  for (let i = 0; i < hire_employers_item.length; i++) {
    if (hire_employers_item[i].value === '') {
      continue;
    }
    let name = String(hire_employers_item[i].value + ', ');
    name = name[0].toUpperCase() + name.substring(1);
    mainList.employers[i] = name;
    employers_value.textContent += mainList.employers[i];
  }
});

let mainList = {
  budget: money,
  // shopName: 'nameShop',
  shopGoods: [],
  employers: {},
  open: false,
  discont: false,
  shopItems: [],

  makeDiscount: function makeDiscount() {
    if (mainList.discont) {
      price = price * 0.8;
    }
  },  
};
