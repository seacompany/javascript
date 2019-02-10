'use strict';

/* 1.Почему код дает именно такие результаты?*/

// 1 пример
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // Ответ 2, в префиксной форме произошло инкрементировние т.е. взяли а=1 и увеличили на 1, получили ответ 2;

// 2 пример
d = b++;
alert(d); // Ответ 1, в постфиксной форме сначал возвращаем число b=1, только после этого будет произведено инкрементирование;

// 3 пример
с = (2+ ++а);
alert(c); // Ответ 5, так как ранее, в пером примере мы применили префиксное инкрементрирование к операнда a, она стала равнятся 2, здесь мы опять производим данную операцию, т.е. а = 3, а далее прибавляем 2;

// 4 пример

d = (2+ b++);
alert(d); // Ответ 4, в примере 2 у операнды b значение присвоилось 2, в данном примере идет постфиксный инкремент, значит у b возвращаем 2 и складываем с 2;
alert(a);//Ответ 3, в 1 примере а стало ранво 2, в 3 примере a стало равно 3, так как использовали префиксное инкрементирование. здесь же мы просто вывели а из 3 примера;
alert(b); // Ответ 3, в 4 примере использовали постфиксный инкремент, тогда мы возвратили 2, а сейчас выполняем само инкрементирование и выводи 3;




/* 2. Чему будет равен x?*/
var a = 2;
var x = 1 + (a *= 2);
console.log (x); // Ответ 5, оператор *= подразумеваетто, что мы берем значение опренды а, т.е. 2 и умножаем на 2, далее 4 складываем с 1;




/* 3. Объявить две целочисленные переменные - a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу: */

// Если a и b положительные, вывести их разность:
let a = 15;
let b = 8;

if (a >= 0 && b >= 0) { 
    let result = a - b;
    console.log(result);
}

// Если a и b отрицательные, вывести их произведение:
let a = -15;
let b = -8;

if (a < 0 && b < 0) { 
    let result = a * b;
    console.log(result);
}  

// Если a и b разных знаков, вывести их сумму:
let a = -15;
let b = 8;

if (a < 0 && b >= 0) { 
    let result = a + b;
    console.log(result);
} 

// То же самое только через функцию

function compareNumbers(a, b) {
    if (a >= 0 && b >= 0) {
        let result = a - b;
        console.log(result);
    } else if (a < 0 && b < 0) { 
        let result = a * b;
        console.log(result);
    }  else if (a < 0 && b >= 0) {
        let result = a + b;
        console.log(result);
    }  
}
compareNumbers(15, 8);
compareNumbers(-15, -8);
compareNumbers(-15, 8);




 /* 4. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

//Первый вариант:
function addition (x, y) {
    return (x + y);
}
    add = addition (10, 8);
    alert (add);

function substraction (x, y) {
    return (x - y);
}
    sub = substraction (10, 8);
    alert (sub);

function multiplication (x, y) {
    return (x * y);
}
    mul = multiplication (10, 8);
    alert (mul);

function division (x, y) {
    return (x / y);
}
    divis = division (10, 8);
    alert (divis);

//Второй вариант:

let firstNumber = +prompt ("Type the first number: ");
let secondNumber = +prompt ("Type the second number: ");
let operation = prompt("Enter one of the arithmetical operation:'addition', 'substraction', 'multiplication', 'division'");


function calculator (firstParametr, secondParametr, operationType) {
    if (operationType == "addition") {
        let result = firstParametr + secondParametr;
        return (result);
    } else if (operationType == "substraction") {
        let result = firstParametr - secondParametr;
        return (result);
    } else if (operationType == "multiplication") {
        let result = firstParametr * secondParametr;
        return (result);
    } else if (operationType == "division") {
        let result = firstParametr / secondParametr;
        return (result); 
    } else {
        alert("You typed the wrong arithmetical oparation");
    } 
}
alert(calculator(firstNumber, secondNumber, operation));




/* 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 - значения аргументов, operation- строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций(использовать функции мз пункта 4 и вернуть полученное значение (применить switch)) */

let first = +prompt('Insert 1 argument: ');
let second = +prompt('Insert 2 argument: ');
let oper = prompt('Insert name of operation: addition, substraction, multiplication, division:');
let result;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return arg1 + arg2;
            break;
        case 'substraction':
            return arg1 - arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
        default:
            alert("You typed the wrong arithmetical oparation");
            break;
    }
}

result = mathOperation(first, second, oper);
alert('Answer: ' + result);
