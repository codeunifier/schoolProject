function onCreateElementClick() {
    var btn = document.createElement("button");
    var btnText = document.createTextNode("Click me!");

    var link = document.createElement("a");
    var linkText = document.createTextNode("Go to Google");

    link.setAttribute('href', 'https://www.google.com');

    btn.appendChild(btnText);
    link.appendChild(linkText);

    document.getElementById("demo_1").appendChild(btn);
    document.getElementById("demo_1").appendChild(link);
}

function onRemoveChildClick() {
    var infestation = document.getElementById("infested");

    if (infestation.firstChild != null) {
        if (infestation.firstChild.tagName != "img") {
            infestation.removeChild(infestation.firstChild);    
        }

        infestation.removeChild(infestation.firstChild);
    }
}

function onReplaceChildClick() {
    var pineAnch = document.getElementById("item_1");
    var brocSpin = document.getElementById("item_2");

    var newItem1 = pineAnch.innerText == "Pineapple" ? "Anchovies" : "Pineapple";
    var newItem2 = brocSpin.innerText == "Broccoli" ? "Spinach" : "Broccoli";

    pineAnch.replaceChild(document.createTextNode(newItem1), pineAnch.firstChild);
    brocSpin.replaceChild(document.createTextNode(newItem2), brocSpin.firstChild);
}

function onInsertBeforeClick() {
    var newElm = document.createElement("button");
    var newElmText = document.createTextNode("Medium");

    newElm.appendChild(newElmText);

    var container = document.getElementById("container-1");

    container.insertBefore(newElm, container.childNodes[3]);
}

function onInsertAfterClick() {
    var newElm = document.createElement("button");
    var newElmText = document.createTextNode("Medium");

    newElm.appendChild(newElmText);

    var container = document.getElementById("container-2");

    container.insertAfter(newElm, container.childNodes[1]);
}