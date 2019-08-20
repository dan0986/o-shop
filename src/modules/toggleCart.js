export default function toggleCart() {
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