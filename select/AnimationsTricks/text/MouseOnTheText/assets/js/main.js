window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    toTouchesCircle();

    function toTouchesCircle() {
        let cursor = document.getElementById('cursor');
        let text = document.getElementById('text');




        text.addEventListener('mouseover', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
        });

        text.addEventListener('mouseout', () => {
            cursor.style.width = '0';
            cursor.style.height = '0';
        });

        document.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        })
    }
});