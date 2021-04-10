var old_date = new Date('Mar 03, 2021 23:10:00');      //Дата разработки

var new_date = new Date();                             //Дата у пользователя

var result = Math.floor((new_date - old_date) / 31536000000);  //Математика

var elMsg = document.getElementById('message');        //Берём элемент "сообщение"

elMsg.textContent = result + ' лет мы торгуем для вас.';       //Сообщение
