'use strict';
/* 2 Продолжить работу с интернет-магазином, а именно, перенести функционал подсчета корзины на объектно-ориентированную базу:
• создать объект Basket с полем goodList и методами countTotalPrice и countTotalNumber (методы должны считать общую стоимость того, что в goodList и общее количество того, что в goodList)
• создать объект Good c полями: name, price и методом putToBasket
• после этого создать массив товаров (объектов Good), пройтись по нему в цикле и положить в корзину по одному товару на четной позиции и по 2 товара на нечетной позиции
• вывести общую стоимость корзины и общее количество товаров в корзине;*/

function generateBasket() {
    let good = {
        name: ['MacBook Pro', 'MacBook Air', 'Mac Mini', 'IMac', 'Imac Pro'],
        price: [2500, 1500, 1200, 2200, 3400],

        putToBasket() {
            let resultName = [];
            for (let i = 0; i < this.name.length; i++) {
                if (i % 2 == 0) {
                    resultName.push(this.name[i]);
                } else {
                    resultName.push(this.name[i]);
                    resultName.push(this.name[i]);
                }
            }
            return (resultName);
        },

        priceConnect() {
            let resultPrice = [];
            for (let j = 0; j < this.price.length; j++) {
                if (j % 2 == 0) {
                    resultPrice.push(this.price[j]);
                } else {
                    resultPrice.push(this.price[j]);
                    resultPrice.push(this.price[j]);
                }
            }
            return (resultPrice);
        }
    }

    let basket = {
        goodList: good.putToBasket(),

        countTotalNumber() {
            return ( /*'Общее количество товаров в корзине: ' + */ this.goodList.length);

        },

        countTotalPrice() {
            let basketPrice = good.priceConnect().reduce(function (sum, current) {
                return sum + current;
            })
            return ( /*'Общая стоимость корзины = ' + */ basketPrice /* + '$'*/ );
        }
    }

    console.log(basket.countTotalNumber());
    console.log(basket.countTotalPrice());

    let pasteBasket = document.getElementById('pasteBasket');

    let emptyBasket = document.createElement('p');
    emptyBasket.className = '1st_par';
    pasteBasket.appendChild(emptyBasket);
    emptyBasket.innerText = 'Basket is empty!';
   
    let fullBasket = document.createElement('p');
    fullBasket.className = '2nd_par';
    pasteBasket.appendChild(fullBasket);
    fullBasket.innerText = 'There are: '  + basket.countTotalNumber() +  ' goods, total price is ' + basket.countTotalPrice() + ' dollars';

    if (basket.countTotalNumber() > 0) {
        emptyBasket.parentNode.removeChild(emptyBasket);
    } 

    if (basket.countTotalNumber() == 0) {
        fullBasket.parentNode.removeChild(fullBasket);
    } 
}

window.onload = generateBasket;