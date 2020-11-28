window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // for menu burger------------------------------------------------------------

    const burger = document.querySelector('.burger');
    const menuWrapp = document.querySelector('.menu-wrapp__mobile');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        burger.classList.toggle('burger-active');
        menuWrapp.classList.toggle('menu-wrapp__mobile-active');
        //checkMenuBorder();
    });

    menu.addEventListener('click', (e) => {

        if (e.target.classList.contains('menu__link') || e.target.classList.contains('menu__item')) {
            burger.classList.toggle('burger-active');
            menuWrapp.classList.toggle('menu-wrapp__mobile-active');
        } else return;
    });

    // if(menuWrapp.classList.contains('menu-wrapp__mobile-active')){
    //     document.body.classList.add('static-body');
    // }


    // for tabs---------------------------------------------------------------------
    let tabMenu = document.querySelector('.tabs__list'),
        tabMenuItem = document.querySelectorAll('.tabs__item-menu'),
        tabContent = document.querySelectorAll('.tabs__content');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabMenuItem.forEach(item => {
            item.classList.remove('tabs__item-menu-active');
        });
    }

    hideTabContent();
    showTabContent(1);

    function showTabContent(i) {
        if (i == 0) {
            for (let k = 0; k < tabContent.length; k++) {
                tabContent[k].classList.remove('hide');
                tabContent[k].classList.add('show');
            }
        } else {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        }

        tabMenuItem[i].classList.add('tabs__item-menu-active');
    }

    tabMenu.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabs__item-menu')) {
            tabMenuItem.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // header adhere to scroll-----------------------------------------------------
    let header = document.querySelector('.header-wrapp'),
        services = document.querySelector('.first-screen').clientHeight;

    console.log(services);


    window.addEventListener('scroll', function () {
        let scrolled = document.documentElement.scrollTop;

        if (scrolled == 0) {
            header.classList.remove('header-hide');
            header.classList.add('header-show');

        } else if (scrolled < services) {
            header.classList.remove('header-show');
            header.classList.add('header-hide');
        } else {
            header.classList.remove('header-hide');
            header.classList.add('header-show');
        }
    });

    // ========================================modal window========================================
    const order = document.querySelectorAll('.button__order'),
        modalWindow = document.querySelector('.modal-window'),
        modalWindowBg = document.querySelector('.modal-window__bg'),
        modalWindowClose = document.querySelector('.button__close');

    order.forEach((button) => {
        button.addEventListener('click', () => {
            modalWindow.classList.remove('modal-window__close');
            modalWindowBg.classList.remove('modal-window__bg-close');
            modalWindow.classList.add('modal-window__active');
            modalWindowBg.classList.add('modal-window__bg-active');

            document.body.classList.add('static-body');
        });
    });

    modalWindowBg.addEventListener('click', () => {
        modalWindowBg.classList.remove('modal-window__bg-active');
        modalWindowBg.classList.add('modal-window__bg-close');
        modalWindow.classList.remove('modal-window__active');
        modalWindow.classList.add('modal-window__close');  

        burger.classList.toggle('burger-active');
        menuWrapp.classList.toggle('menu-wrapp__mobile-active');

        document.body.classList.remove('static-body');
    });


    modalWindowClose.addEventListener('click', () => {
        modalWindowBg.classList.remove('modal-window__bg-active');
        modalWindowBg.classList.add('modal-window__bg-close');
        modalWindow.classList.remove('modal-window__active');
        modalWindow.classList.add('modal-window__close');

        burger.classList.toggle('burger-active');
        menuWrapp.classList.toggle('menu-wrapp__mobile-active');

        document.body.classList.remove('static-body');
    });


});