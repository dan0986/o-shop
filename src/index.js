'use strict';
// const checkbox = document.querySelector('#discount-checkbox');

// checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         this.nextElementSibling.classList.add('checked');
//     } else {
//         this.nextElementSibling.classList.remove('checked');
//     }
// });
// for (let i = 0; i < checkbox.length; i++ ){
//     checkbox[i].addEventListener('change', function() {
//              if (this.checked) {
//                  this.nextElementSibling.classList.add('checked');
//              } else {
//                  this.nextElementSibling.classList.remove('checked');
//              }
//     });
// };

// console.dir(checkbox);


const checkbox = document.querySelectorAll('.filter-check_checkbox'),
btnCart = document.getElementById('cart'),
modalCart = document.querySelector('.cart'),
btnClose = document.querySelector('.cart-close'),
cards = document.querySelectorAll('.goods .card'),
cardWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty'),
countOfGoods = document.querySelector('.counter');


// filter checkbox 

checkbox.forEach(function(el){
    el.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

// end filter checkbox

// cart

btnCart.addEventListener('click', function() {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';

});

btnClose.addEventListener('click', function() {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

cards.forEach(function(card){
    const btn = card.querySelector('button');
    btn.addEventListener('click', function(){
        const cardClone = card.cloneNode(true);
        cardWrapper.append(cardClone);
        cartEmpty.remove();
        showCountGoods();
        });

    });


function showCountGoods(){
    const countGoods = cardWrapper.querySelectorAll('.card');
    countOfGoods.textContent = countGoods.length;

}


// end cart