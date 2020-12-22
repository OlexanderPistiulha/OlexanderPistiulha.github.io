window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // for tabs---------------------------------------------------------------------
    const tabMenu = document.querySelector('.tab__list'),
        tabToggle = document.querySelector('.tab__toggle'),
        tabName = document.querySelector('.tab__name'),
        tabMenuItem = document.querySelectorAll('.tab__item-menu'),
        tabContent = document.querySelectorAll('.tab__content');

    tabToggle.addEventListener('click', toggle);

    function toggle() {
        tabMenu.classList.toggle('tab__list-hide');
        tabMenu.classList.toggle('tab__list-active');
    }

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabMenuItem.forEach(item => {
            item.classList.remove('tab__item-menu-active');
        });
    }

    hideTabContent();
    showTabContent(0);

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

        tabMenuItem[i].classList.add('tab__item-menu-active');
    }

    tabMenu.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tab__item-menu')) {
            tabMenuItem.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

        toggle();

        // add something for tab__name 
        
    });
});