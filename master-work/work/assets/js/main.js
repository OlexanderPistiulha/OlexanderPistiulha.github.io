document.querySelector('.mobile__icon').addEventListener('click', function () {
    this.classList.toggle('mobile__icon-active');
    document.querySelector('.mobile__body').classList.toggle('mobile__body-active');
});
window.addEventListener('load', function () {
    let preloader = document.querySelector('.preloader');
    document.querySelector('.preloader-active').classList.remove('preloader-active');
    preloader.style.display = 'none';

});

//  -----------------------------------slider-----------------------------------
$(document).ready(function () {
    $('.slider').slick({

        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 750,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    arrows: false,

                }
            }

        ]
    });
});