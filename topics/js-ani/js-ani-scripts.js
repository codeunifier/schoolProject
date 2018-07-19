function race() {
    var carElm = document.getElementById("raceCar");

    carElm.classList.add("horizontalTranslate");

    document.getElementById("btnRace").disabled = true;
    document.getElementById("btnResetRace").disabled = false;
}

function resetRace() {
    var carElm = document.getElementById("raceCar");

    carElm.classList.remove("horizontalTranslate");
    
    document.getElementById("btnRace").disabled = false;
    document.getElementById("btnResetRace").disabled = true;
}

var clockwise = true;
var toggleWait = false;

function toggleCircleDirection() {
    var circle = document.getElementById("circle1");

    if (clockwise) {
        circle.classList.remove("clockwise");
        circle.classList.add("counterclockwise");
    } else {
        circle.classList.add("clockwise");
        circle.classList.remove("counterclockwise");
    }

    clockwise = !clockwise;
}

function setCircleListeners() {
    document.getElementById("circle1").addEventListener("mouseover", function () {
        if (!toggleWait) {
            toggleWait = true;
    
            toggleCircleDirection();
        }
    });
    document.getElementById("circle1").addEventListener("mouseout", function () {
        toggleWait = false;
    });
}

function toggleDemo3Pause() {
    var demoElm = document.getElementById("circle2");
    var button = document.getElementById("btnDemo3Pause");

    if (button.innerText == "Pause") {
        demoElm.style.animationPlayState = "paused";
        button.innerText = "Play";
    } else if (button.innerText == "Play") {
        demoElm.style.animationPlayState = "running";
        button.innerText = "Pause";
    }
}

function toggleDemo3Reverse() {
    var demoElm = document.getElementById("circle2");
    var button = document.getElementById("btnDemo3Reverse");

    if (button.innerText == "Reverse") {
        demoElm.style.animationDirection = "reverse";
        button.innerText = "Normal";
    } else if (button.innerText == "Normal") {
        demoElm.style.animationDirection = "normal";
        button.innerText = "Reverse";
    }
}

function speedUpDemo3() {
    var demoElm = document.getElementById("circle2");
    var styles = window.getComputedStyle(demoElm, null);
    var animation = parseInt(styles["animation-duration"]);

    if (animation > 1) {
        animation--;
        demoElm.style.animationDuration = animation + "s";
    }
}

function slowDownDemo3() {
    var demoElm = document.getElementById("circle2");
    var styles = window.getComputedStyle(demoElm, null);
    var animation = parseInt(styles["animation-duration"]);

    animation++;
    demoElm.style.animationDuration = animation + "s";
}