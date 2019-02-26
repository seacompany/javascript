'use strict';

function generateBasket() {
    let good = {
        boardType: [/*'Funboards', 'Surfboards', 'Funboards'*/],
        name: [/*'Chilli Rare Bird', 'Emery NEM XF', 'Funboards'*/],
        price: [/*890, 950, 670*/],

        putToBasket() {
            let resultName = [];
            for (let i = 0; i < this.name.length; i++) {
                resultName.push(this.name[i]);
                }
            return (resultName);
        },

        priceConnect() {
            let resultPrice = [];
            for (let j = 0; j < this.price.length; j++) {
                resultPrice.push(this.price[j]);
                }
            return (resultPrice);
        }

    }


    let basket = {
        goodList: good.putToBasket(),

        basketIsEmpty() {
            if (this.goodList < 0 || this.goodList === undefined || isNaN(this.goodList)) {
                return true;
            }
        },

        countTotalNumber() {
            if (this.basketIsEmpty() != true) {
            return (this.goodList.length);
            }
        },

        countTotalPrice() {
            if (this.basketIsEmpty() != true) {
            let basketPrice = good.priceConnect().reduce(function (sum, current) {
                return sum + current;
            })
            return (basketPrice);
            }
        }
    }

    /*console.log(basket.countTotalNumber());
    console.log(basket.countTotalPrice());*/

    let cart = document.getElementById('full_cart');

    let emptyBasket = document.createElement('p');
    cart.appendChild(emptyBasket);
    emptyBasket.innerText = 'Basket is empty!';
   
    let fullBasket = document.createElement('p');
    cart.appendChild(fullBasket);
    fullBasket.innerText = basket.countTotalNumber() +  ' goods in the cart ' + '\r\n' + good.putToBasket()
    + '\r\n' + 'Total price is ' + basket.countTotalPrice() + ' dollars';
    
    if (basket.countTotalNumber() > 0) {
        emptyBasket.parentNode.removeChild(emptyBasket);
    } 

    if (basket.countTotalNumber() === 0) {
        fullBasket.parentNode.removeChild(fullBasket);
    } 

    /*Навешиваю обработчик клик */
    let buttons = document.getElementsByTagName('button');
    for (let b = 0; b < buttons.length; b++){
        buttons[b].addEventListener('click', function (event) {
            console.log(event.target);
        })
    }

/*
    function addToName(eventObj) {
        let button = eventObj.target;
        button = good.name.push(this.name)
    }

    console.log (good.name);
*/
    
    
}

generateBasket();

