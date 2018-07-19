var circleOn = false;

function handleClickEvent(e) {
    var x = e.clientX;
    var y = e.clientY; 

    x -= 13;
    y -= 13;

    document.getElementById("circle").style.top = y + "px";
    document.getElementById("circle").style.left = x + "px";
}

function toggleClickEventListener() {
    circleOn = !circleOn;

    if (circleOn) {
        document.getElementById("circle").style.display = "block";
        document.addEventListener("click", handleClickEvent);
    } else {
        document.getElementById("circle").style.display = "none";
        document.removeEventListener("click", handleClickEvent);
    }
}

function onInputChanged() {
    document.getElementById("changeBox").style.backgroundColor = "lightgreen";
    
    setTimeout(function () {
        document.getElementById("changeBox").style.backgroundColor = "tomato";
    }, 1000);
}

function addKeydownListener() {
    document.getElementById("keyDownDemoText").addEventListener("keydown", function (e) {
        document.getElementById("demoOutput").innerText = "Key pressed: " + e.key;
    });

    document.getElementById("keyDownDemoPassword").addEventListener("keydown", function(e) {
        document.getElementById("demoOutput2").innerText = "Key pressed: " + e.key;
    });
}