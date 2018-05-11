var onCalculateButtonClick = function () {
    var number = document.getElementById("fbNum").value; //avoiding jQuery
    var fibonacci = [];

    number--;

    for (var a = 1, b = 0, temp; number >= 0; number--) {
        temp = a;
        a += b;
        b = temp;
        fibonacci.push(b);
    }

    document.getElementById("fbResult").innerHTML = "Result: " + fibonacci; //avoiding jQuery
}

var onFindColorClick = function () {
    var fruit = document.getElementById("fruit").value;
    var color = "";

    switch(fruit) {
        case "Apple":
            color = "red";
        break;
        case "Orange":
            color = "orange";
        break;
        case "Banana":
            color = "yellow";
        break;
    }

    document.getElementById("colorResult").innerHTML = "It's " + color + " of course!";
}

var onArrayOutputClick = function () {
    var output = "";
    var array = ["One Fish", "Two Fish"];
    
    for (var i = 0; i < array.length; i++) { //length = 2
        if (i > 0) {
            output += ", ";
        }

        output += array[i];
    }
    
    var associative = [];

    associative["red"] = "Red Fish";    //setting value at index of type string
    associative[false] = "Blue Fish";   //setting value at index of type boolean

    output += ", " + associative["red"];
    output += ", " + associative[1 > 2];

    document.getElementById("arrayOutput").innerHTML = "Output: " + output;
}