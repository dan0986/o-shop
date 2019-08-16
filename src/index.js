'use strict';

// filter checkbox 

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(function (el) {
        el.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });

}

// end filter checkbox


// cart

function toggleCart() {
    const btnCart = document.getElementById('cart'),
        modalCart = document.querySelector('.cart'),
        btnClose = document.querySelector('.cart-close');


    btnCart.addEventListener('click', function () {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';

    });

    btnClose.addEventListener('click', function () {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}


// end cart

// add cart

function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cardWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countOfGoods = document.querySelector('.counter');

    cards.forEach(function (card) {
        const btn = card.querySelector('button');
        btn.addEventListener('click', function () {
            const cardClone = card.cloneNode(true);
            cardWrapper.append(cardClone);

            showData();
            const btnRemove = cardClone.querySelector('.btn');
            btnRemove.textContent = 'Удалить из корзины';
            btnRemove.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });

        });

    });


    function showData() {
        const countGoods = cardWrapper.querySelectorAll('.card'),
            cardPrices = cardWrapper.querySelectorAll('.card-price'),
            cardsTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countOfGoods.textContent = countGoods.length;

        cardPrices.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardsTotal.textContent = sum;

        if (countGoods.length !== 0) {
            cartEmpty.remove();
        } else {
            cardWrapper.appendChild(cartEmpty);
        }


    }

}

// end add cart

// action page

function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        btnSearch = document.querySelector('.search-btn');

    // discount checkbox

    discountCheckbox.addEventListener('change', filter);

    // end discount checkbox

    // filter price

    min.addEventListener('change', filter);
    max.addEventListener('change', filter);


    // end filter price

    // search filter

    btnSearch.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });

    });

    // end search filter

    function filter() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent),
                discount = card.querySelector('.card-sale');

            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.style.display = 'none';
            } else if (discountCheckbox.checked && !discount) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    }
}

//end action page


// get data 

function getData() {

    fetch('../db/db.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Данные не были получены. Ошибка: " + response.status);
        }

    }).then(data => console.log(data))
    .catch(err => console.warn(err));

}

// end get data

getData();
toggleCheckbox();
toggleCart();
addCart();
actionPage();