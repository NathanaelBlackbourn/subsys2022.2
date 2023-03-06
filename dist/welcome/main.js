addEventListener("DOMContentLoaded", init);
addEventListener("resize", setSizes);

let circles = {};

function init() {
    getElements();
    setSizes();
    animate();
}

function getElements() {
        circles.outer = document.getElementById("outer");
        circles.inner1 = document.getElementById("inner1");
        circles.inner2 = document.getElementById("inner2");
}

function setSizes() {
    const outerDiam = 0.7 * Math.min(window.innerHeight, window.innerWidth);
    circles.outerDiam = outerDiam;
    circles.outer.style.height =  outerDiam + "px";
    circles.outer.style.width =  outerDiam + "px";
}

function animate() {
    circles.inner1.style.transform = "rotate(0deg)";
    circles.inner2.style.transform = "rotate(0deg)";
    setTimeout(animateCircle, 1000);
    setInterval(animateCircle, 4000);
}

function animateCircle() {
    const circleNum = Math.ceil(Math.random() * 2);
    const currentDegs = parseInt(circles["inner" + circleNum].style.transform.match(/\d/g).join(""));
    const newDegs =  getNewDegs(currentDegs);
    circles["inner" + circleNum].style.transition = `transform ${getDelay(currentDegs, newDegs)}ms linear`
    circles["inner" + circleNum].style.transform = `rotate(${newDegs}deg)`;
}

function getNewDegs(currentDegs) {
    return Math.ceil(Math.random() * 360);
}

function getDelay(currentDegs, newDegs) {
    const diff = Math.abs(currentDegs - newDegs);
    if (diff < 50) {
        return 500
    } else {
    return 5000 - 2 * diff;
    }
}
