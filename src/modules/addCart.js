export default function addCart() {
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