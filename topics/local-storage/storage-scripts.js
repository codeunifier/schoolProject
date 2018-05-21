function onButtonClick() {
    if (localStorage.clickCount) {
        localStorage.clickCount++;
    } else {
        localStorage.clickCount = 1;
    }

    document.getElementById("clicks").innerHTML = "Number of clicks: " + localStorage.clickCount;
}

function saveSelections(item) {
    var elms = document.getElementsByClassName("cart-item");
    var selections = [];

    for (var i = 0; i < elms.length; i++) {
        if (elms[i].childNodes[0].value != "") {
            selections.push({
                "itemName": elms[i].childNodes[1].innerText,
                "itemCount": elms[i].childNodes[0].value
            });
        }
    }

    localStorage.cart = JSON.stringify(selections);
}

function clearShoppingCart() {
    var elms = document.getElementsByClassName("cart-item");

    for (var i = 0; i < elms.length; i++) {
        elms[i].childNodes[0].value = undefined;
    }

    localStorage.removeItem("cart");
}

function loadCartItems() {
    if (localStorage.cart) {
        var storageCart = JSON.parse(localStorage.cart);
        
        for (var i = 0; i < storageCart.length; i++) {
            document.getElementById("input_" + storageCart[i].itemName).value = storageCart[i].itemCount;
        }
    }
}

function loadDemoHtml() {
    if (localStorage.demoHTML) {
        document.getElementById("demo").innerHTML = localStorage.demoHTML;
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                localStorage.demoHTML =  this.responseText;
                document.getElementById("demo").innerHTML =  this.responseText;
            }
        };
        xhttp.open("GET", "code.html", true);
        xhttp.send();
    }
}