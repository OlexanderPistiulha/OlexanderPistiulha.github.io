window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // for menu burger
    clickBurger();

    function clickBurger() {

        let burger = document.querySelector('.burger'),
            burgerItem = document.querySelectorAll('.burger__item');
        burger.addEventListener('click', function () {
            for (let i = 0; i < burgerItem.length; i++) {
                burgerItem[i].classList.toggle('burger__item-active');
            }

            document.querySelector('.menu-mobile').classList.toggle('menu-mobile__active');
        });
    };




});