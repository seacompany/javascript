'use strict';

/*1. Дан массивСкопируйте его в переменную b и выведите в консоль.*/

let a = [
    [{
        name: 'Mary',
        age: 23
    }, {
        name: 'Mike',
        age: 45
    }, {
        name: 'Nick',
        age: 11
    }],
    [{
        name: 'Adam',
        age: 56
    }, {
        name: 'Sara',
        age: 21
    }, {
        name: 'Don',
        age: 22
    }],
    [{
        name: 'Karl',
        age: 34
    }, {
        name: 'Marta',
        age: 76
    }, {
        name: 'John',
        age: 19
    }]
];

let b = [];
for ( let i = 0; i < a.length; i++) {
    b[i] = a[i];
    b[i][i] = a[i][i];
}

b[0][1] = {name: 'Helen', age: 40};
console.log (a);
console.log (b);





/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;

b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/



let basket = [{
        id: 1,
        name: 'MacBook Pro',
        price: 250000,
        quantity: 1,
        year: 2018,
        color: 'grey',
        memory: 512,
        RAM: '16GB'
    },
    {
        id: 2,
        name: 'bag',
        price: 22000,
        quantity: 1,
        material: 'leather',
        color: 'black'
    },
    {
        id: 3,
        name: 'magic mouse',
        quantity: 1,
        price: 7500
    },
    {
        id: 4,
        name: 'keyboard',
        quantity: 1,
        price: 12000}];


let basketPrice = 0;

function countBasketPrice() {
    for (let i = 0; i < basket.length; i++) {
        basketPrice = basketPrice + basket[i].price * basket[i].quantity;
        
    }
    return basketPrice;
}

for (let i = 0; i < basket.length; i++)
console.log('В корзине находятся следующие товары: ' + basket[i].name);
console.log('Стоимость товаров в корзине равна ' + countBasketPrice(basket) + ' рублей');



/*3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:*/

for ( let i = 0; i <= 9; console.log (i++ + '')){}



/*4 *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5: */
let str = '';
for (let i = 1; i <= 20; i++) {
    str += 'x';
    console.log(str);
}
