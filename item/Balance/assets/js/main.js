window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // for menu burger================================================================= 
    let burger = document.querySelector('.burger');
    let header = document.querySelector('.header__wrapp');

    burger.addEventListener('click', function () {
        burger.classList.toggle('burger-active');
        header.classList.toggle('header__wrapp-mobile-active');
    });
    // header adhere to scroll =========================================================

    let headerAdhere = document.querySelector('.header__wrapp');

    window.addEventListener('scroll', function () {
        let scrolled = document.documentElement.scrollTop;

        if (scrolled > 10) {
            headerAdhere.classList.remove('header__wrapp-scroll-off');
            headerAdhere.classList.add('header__wrapp-scroll-on');

        } else if (scrolled < 10) {
            headerAdhere.classList.remove('header__wrapp-scroll-on');
            headerAdhere.classList.add('header__wrapp-scroll-off');
        }
    });

    // text typing=====================================================================
    const instance = new TypeIt("#type", {
            strings: "",
            speed: 75,
            waitUntilVisible: true,
            afterComplete: async (step, instance) => {
                instance.destroy();
            }

        }).type("Balance Your body ", {
            delay: 300
        })
        .move(-4)
        .delete(1)
        .type('B')
        .move('END')
        .type(' and mind')
        .pause(300)
        .move(-3)
        .delete(1)
        .type('M')
        .move('END')
        .go();   
});