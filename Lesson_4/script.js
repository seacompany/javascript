'use strict';

/**1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

function numberToObject() {
    let inputNumber = prompt ('Введите число от 0 до 999');
    let arrayNumber = inputNumber.split('');
    let objectNumber = {};
    
    
    if(inputNumber < 0 || inputNumber > 999 || isNaN(inputNumber)){
        console.log ('Ошибка, введите корректное число от 0 до 999');
        return objectNumber;
    } else {
        objectNumber['сотни'] = +arrayNumber[0];
        objectNumber['десятки'] = +arrayNumber[1];
        objectNumber['единицы'] = +arrayNumber[2];
        return objectNumber;
    }
}
console.log (numberToObject());




/* 2 Продолжить работу с интернет-магазином, а именно, перенести функционал подсчета корзины на объектно-ориентированную базу:
• создать объект Basket с полем goodList и методами countTotalPrice и countTotalNumber (методы должны считать общую стоимость того, что в goodList и общее количество того, что в goodList)
• создать объект Good c полями: name, price и методом putToBasket
• после этого создать массив товаров (объектов Good), пройтись по нему в цикле и положить в корзину по одному товару на четной позиции и по 2 товара на нечетной позиции
• вывести общую стоимость корзины и общее количество товаров в корзине;*/


let good = {
    name: ['MacBook Pro', 'MacBook Air', 'Mac Mini', 'IMac', 'Imac Pro'],
    price: [2500, 1500, 1200, 2200, 3400],

    putToBasket() {
        let resultName = [];
            for (let i=0; i < this.name.length; i++) {
                if (i%2==0) {
                resultName.push(this.name[i]);
            }  else{
                resultName.push(this.name[i]);
                resultName.push(this.name[i]);
            }
            }
            return (resultName);
            },

    priceConnect() {
        let resultPrice = [];
            for (let j=0; j < this.price.length; j++) {
                if (j%2==0) {
                resultPrice.push(this.price[j]);
            }  else{
                resultPrice.push(this.price[j]);
                resultPrice.push(this.price[j]);
            }
            }
            return (resultPrice);
            }
    }

   console.log(good.priceConnect());


let basket = {
    goodList: good.putToBasket(),

    countTotalNumber() {
        return ('Общее количество товаров в корзине: ' + this.goodList.length);

    },

    countTotalPrice() {
        let basketPrice = good.priceConnect().reduce (function (sum, current) {
            return sum + current;
        })
        return('Общая стоимость корзины = ' + basketPrice + '$') ;
    }
    }
    

console.log (basket.goodList);
console.log(basket.countTotalNumber());
console.log(basket.countTotalPrice());
