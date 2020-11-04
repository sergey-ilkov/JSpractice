var money = prompt("Ваш бюджет?");
var nameShop = prompt("Название вашего магазина?");

var mainList = {
    budget: money,
    name: nameShop,
    shopGoods: [],
    employers: {},
    open: '',
}


for (let i=0; i < 3; i++) {
    var question = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods.push(question);
}


const shop = document.querySelector('.shop');
shop.innerHTML = 'Название магазина: ' + mainList.name;
const budget = document.querySelector('.budget');
budget.innerHTML = 'Бюджет: ' + mainList.budget;
const products = document.querySelector('.products');
products.innerHTML = 'Товар для продажи: ' + mainList.shopGoods;
 

