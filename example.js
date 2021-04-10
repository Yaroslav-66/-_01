/* Привет всем, кто это читает. Я не знаю, кому дам прочитать этот файл, но, если вам повезло, и вы его получили - 
   поздравляю !!! Вы можете почитать это. Ну на этом всё, удачи ;). */

//это приветственное сообщение:

var greeting = 'Привет, ';
var name = 'Человек';
var message = '! Тебе посылка (не знаю зачем):';

// соединяем сообщения в одну строку

var welcome = greeting + name + message;

//создаём переменные с информацией о табличке

var sign = 'Чебупицца';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// получаем элемент с идентификатором greeting

var el = document.getElementById('greeting');
el.textContent = welcome;

// тоже самое, только с остальным 

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + '$';


var elSubTotal = document.getElementById('shipping');
elShipping.textContent = shipping + '$';


var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + '$';


