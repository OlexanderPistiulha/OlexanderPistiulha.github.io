let box = document.querySelector(".box");

function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = mousemove;
}

let mouseX,
    mouseY;

function mousemove(event) {

    let mouse_x,
        mouse_y;

    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;

        check(+mouse_x, +mouse_y, +mouseX, +mouseY);

        mouseX = mouse_x;
        mouseY = mouse_y;

    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;

        check(+mouse_x, +mouse_y, +mouseX, +mouseY);

        mouseX = mouse_x;
        mouseY = mouse_y;
    }

    box.style.top = mouse_y + "px";
    box.style.left = mouse_x + 10 + "px";
}

let pawsDirection = document.querySelectorAll(".paws");


function check(m_x, m_y, mX, mY) {
    // console.log(f);
    if (mX < m_x) {
        console.log("right");
        pawsDirection.forEach(paw => paw.style.transform = "rotate(60deg)");
        pawsDirection[0].style.left = "-80px";
        pawsDirection[1].style.left = "-50px";
    } else if (mX > m_x) {
        console.log("left");
        pawsDirection.forEach(paw => paw.style.transform = "rotate(-60deg)");
        pawsDirection[0].style.left = "30px";
        pawsDirection[1].style.left = "0px";
    }
}

init();