window.addEventListener('load', function () {
    let preloader = document.querySelector('.preloader');
    document.querySelector('.preloader-active').classList.remove('preloader-active');
    preloader.style.display = 'none';

});

const select = new Select('#select', {
    placeholder: 'Background animation',
    // текст с item.value вместо preceholder
    // selectedId: '4',
    data: [{
            id: '1',
            value: 'Blur hover effect',
            link: 'select/AnimationsTricks/background/BlurHover (HTML SCSS CSS)/index.html'
        },
        {
            id: '2',
            value: 'Bubbles animation',
            link: 'select/AnimationsTricks/background/Bubble(HTML SCSS CSS)/index.html'
        },
        {
            id: '3',
            value: 'Cloud version one',
            link: 'select/AnimationsTricks/background/Cloud/index.html'
        },
        {
            id: '4',
            value: 'Cloud version two',
            link: 'select/AnimationsTricks/background/CloudVersion2/index.html'
        },
        {
            id: '5',
            value: 'Color slider',
            link: 'select/AnimationsTricks/background/ColorSlider/index.html'
        },
        {
            id: '6',
            value: 'Firs screen of landing page',
            link: 'select/AnimationsTricks/background/LandingPageFirstScreenOne/index.html'
        },
        {
            id: '7',
            value: 'Scroll background effect',
            link: 'select/AnimationsTricks/background/ScrollEffect (HTML SCSS CSS JS)/index.html'
        },
        {
            id: '8',
            value: 'Scroll background parallax',
            link: 'select/AnimationsTricks/background/ScrollParallaxBg (HTML SCSS CSS jQuery)/index.html'
        },
        {
            id: '9',
            value: 'Static spot',
            link: 'select/AnimationsTricks/background/StaticSpot/index.html'
        },
        {
            id: '10',
            value: 'Transparent block',
            link: 'select/AnimationsTricks/background/TransparentDiv (HTML SCSS CSS)/index.html'
        },
        {
            id: '11',
            value: 'Video circle',
            link: 'select/AnimationsTricks/background/VideoCircleBg (HTML SCSS CSS)/index.html'
        },
        {
            id: '12',
            value: 'Wave',
            link: 'select/AnimationsTricks/background/Wave (HTML SCSS CSS)/index.html'
        },
    ]
});

const selectTwo = new Select('#select-two', {
    placeholder: 'Button animation',
    data: [{
            id: '1',
            value: 'Button 3D',
            link: 'select/AnimationsTricks/button/Button3D/index.html'
        },
        {
            id: '2',
            value: 'Button border change',
            link: 'select/AnimationsTricks/button/ButtonBorderChange/index.html'
        },
        {
            id: '3',
            value: 'Button border glory',
            link: 'select/AnimationsTricks/button/ButtonBorderGlory/index.html'
        },
        {
            id: '4',
            value: 'Button gradient glory',
            link: 'select/AnimationsTricks/button/ButtonGradientGlory/index.html'
        },
        {
            id: '5',
            value: 'Button simple arrow',
            link: 'select/AnimationsTricks/button/ButtonSimpleArrow/index.html'
        },
        {
            id: '6',
            value: 'Button Square hover',
            link: 'select/AnimationsTricks/button/ButtonSquareHover/index.html'
        },
        {
            id: '7',
            value: 'Button liquid',
            link: 'select/AnimationsTricks/button/LiquidButton(HTML SCSS CSS JS )/index.html'
        },
    ]
});

const selectTree = new Select('#select-three', {
    placeholder: 'Goods card',
    data: [{
            id: '1',
            value: 'Capitan Marvel',
            link: 'select/AnimationsTricks/card/CardAdaptiveCapitanMarvel/index.html'
        },
        {
            id: '2',
            value: 'Card button hover',
            link: 'select/AnimationsTricks/card/CardButtomHover(HTML SCSS CSS )/index.html'
        },
        {
            id: '3',
            value: 'Card flip image',
            link: 'select/AnimationsTricks/card/CardFlipImg/index.html'
        },
        {
            id: '4',
            value: 'Card hover gradient',
            link: 'select/AnimationsTricks/card/CardHoverLinearGradient(HTML SCSS CSS )/index.html'
        },
        {
            id: '5',
            value: 'Card rotateX',
            link: 'select/AnimationsTricks/card/CardHoverRotateX(HTML SCSS CSS )/index.html'
        },
        {
            id: '6',
            value: 'Card rotateY',
            link: 'select/AnimationsTricks/card/CardHoverRotateY(HTML SCSS CSS )/index.html'
        },
        {
            id: '7',
            value: 'Card scale',
            link: 'select/AnimationsTricks/card/CardHoverScale(HTML SCSS CSS )/index.html'
        },
        {
            id: '8',
            value: 'Card rotate',
            link: 'select/AnimationsTricks/card/CardImageHoverRotate(HTML SCSS CSS )/index.html'
        },
        {
            id: '9',
            value: 'Card',
            link: 'select/AnimationsTricks/card/CardOne/index.html'
        },
        {
            id: '10',
            value: 'Card product',
            link: 'select/AnimationsTricks/card/CardProductHover(HTML SCSS CSS )/index.html'
        },
        {
            id: '11',
            value: 'Card shadow',
            link: 'select/AnimationsTricks/card/CardShadowHover (HTML SCSS CSS )/index.html'
        },
        {
            id: '12',
            value: 'Card input',
            link: 'select/AnimationsTricks/card/CardToggleInput(HTML SCSS CSS )/index.html'
        },
        {
            id: '13',
            value: 'Card two',
            link: 'select/AnimationsTricks/card/CardTwo(HTML SCSS CSS Vanilla tilt.js)/index.html'
        },


    ]
});

const selectFour = new Select('#select-four', {
    placeholder: 'Loader animation',
    data: [{
            id: '1',
            value: 'loader one',
            link: 'select/AnimationsTricks/loaders/loader-one/index.html'
        },
        {
            id: '2',
            value: 'loader two',
            link: 'select/AnimationsTricks/loaders/loader-two/index.html'
        },
        {
            id: '3',
            value: 'loader three',
            link: 'select/AnimationsTricks/loaders/loader-three/index.html'
        },
        {
            id: '4',
            value: 'loader four',
            link: 'select/AnimationsTricks/loaders/loader-four/index.html'
        },
        {
            id: '5',
            value: 'loader five',
            link: 'select/AnimationsTricks/loaders/loader-five/index.html'
        },
        {
            id: '6',
            value: 'loader six',
            link: 'select/AnimationsTricks/loaders/loader-six/index.html'
        },
        {
            id: '7',
            value: 'loade seven',
            link: 'select/AnimationsTricks/loaders/loader-seven/index.html'
        },
        {
            id: '8',
            value: 'loader eight',
            link: 'select/AnimationsTricks/loaders/loader-eight/index.html'
        },
        {
            id: '9',
            value: 'loader nine',
            link: 'select/AnimationsTricks/loaders/loader-nine/index.html'
        },
        {
            id: '10',
            value: 'loader ten',
            link: 'select/AnimationsTricks/loaders/loader-ten/index.html'
        },
        {
            id: '11',
            value: 'loader eleven',
            link: 'select/AnimationsTricks/loaders/loader-eleven/index.html'
        },

    ]
});

const selectFive = new Select('#select-five', {
    placeholder: 'Scroll animation',
    data: [{
            id: '1',
            value: 'Scroll one',
            link: 'select/AnimationsTricks/scroll/scroll-one/index.html'
        },
        {
            id: '2',
            value: 'Scroll to top',
            link: 'select/AnimationsTricks/scroll/scroll-to-top-button/index.html'
        },
    ]
});

const selectSix = new Select('#select-six', {
    placeholder: 'Input animation',
    data: [{
            id: '1',
            value: 'Input number',
            link: 'select/AnimationsTricks/input/InputNumber/index.html'
        },

    ]
});

const selectSeven = new Select('#select-seven', {
    placeholder: 'Text animation',
    data: [{
            id: '1',
            value: 'Mouse on text',
            link: 'select/AnimationsTricks/text/MouseOnTheText/index.html'
        },
        {
            id: '2',
            value: 'Strike througt text',
            link: 'select/AnimationsTricks/text/StrikethroughText/index.html'
        },
        {
            id: '3',
            value: 'Text black and white',
            link: 'select/AnimationsTricks/text/TextBlackAndWhite/index.html'
        },
        {
            id: '4',
            value: 'Text black and white version two',
            link: 'select/AnimationsTricks/text/TextBlackAndWhiteVersTwo/index.html'
        },
        {
            id: '5',
            value: 'Text clip path',
            link: 'select/AnimationsTricks/text/TextClipPath/index.html'
        },
        {
            id: '6',
            value: 'Text reveal',
            link: 'select/AnimationsTricks/text/TextReveal/index.html'
        },
    ]
});


const selectEight = new Select('#select-eight', {
    placeholder: 'SVG animation',
    data: [{
            id: '1',
            value: 'Bubble',
            link: 'select/SVG-animation/SVG-animation-bubble(HTML SCSS CSS)/index.html'
        },
        {
            id: '2',
            value: 'Button',
            link: 'select/SVG-animation/SVG-animation-button(HTML SCSS CSS)/index.html'
        },
        {
            id: '3',
            value: 'text and video',
            link: 'select/SVG-animation/SVG-animation-text + bg-video(HTML SCSS CSS )/index.html'
        },
        {
            id: '4',
            value: 'text',
            link: 'select/SVG-animation/SVG-animation-text(HTML SCSS CSS JS)/index.html'
        },
        {
            id: '5',
            value: 'SVG animation one',
            link: 'select/SVG-animation/SVG-animation(HTML SCSS CSS )/index.html'
        },

    ]
});

const siteList = document.querySelectorAll('.sites');
siteList[0].addEventListener('click', (e) => {
    if (e.target.classList.contains('site__mode')) {
        window.open(`${e.target.dataset.link}`);
    } else return;
});

siteList[1].addEventListener('click', (e) => {
    if (e.target.classList.contains('site__mode')) {
        window.open(`${e.target.dataset.link}`);
    } else return;
});