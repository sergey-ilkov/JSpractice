const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
menu.insertBefore(menuItem[1], menuItem[3]);
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.append(li);
document.body.style.background = 'url(./img/apple_true.jpg)';
