var clicks = 0;

function onDemoTwoButtonClick() {
    clicks++;

    if (clicks < 12) {
        document.getElementById("demo_2_hidden_" + clicks).style.visibility = "visible";
    } else if (clicks == 12) {
        for (var i = 1; i < clicks; i++) {
            document.getElementById("demo_2_hidden_" + i).style.display = "none";
        }

        document.getElementById("flowey").style.display = "block";
        
        document.getElementById("popover_text").innerText = "I told you.";
    }
}

function onDemoThreeButtonClick() {
    var elmVis = document.getElementById("toggleVis");
    elmVis.style.visibility = elmVis.style.visibility == "hidden" ? "visible" : "hidden";

    var elmCol = document.getElementById("toggleColor");
    elmCol.style.backgroundColor = elmCol.style.backgroundColor == "blue" ? "red" : "blue";
    elmCol.style.width = elmCol.style.width == "200px" ? "100px" : "200px";

    var elmSel = document.getElementById("toggleFont");
    elmSel.style.fontFamily = elmSel.style.fontFamily == "verdana" ? "courier" : "verdana";
}