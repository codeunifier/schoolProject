function myFunction() {
    var object = {};

    object.something = "good";
    object.func = function () {
        document.getElementById("feeling").innerHTML = "I'm feeling " + this.something;
    }

    object.func();
}

function Dog(breed, color, owner) {
    this.breed = breed;
    this.color = color;
    this.owner = owner;
    this.bark = function () {
        return "Woof!";
    }
}

function createDogs() {
    var yourDog = new Dog("beagle", "brown/white", "you");
    var myDog = new Dog("german shepherd", "brown/black", "me");

    document.getElementById("dogs").innerHTML = yourDog.breed + ", " + myDog.breed;
}

function bark() {
    var goodBoy = new Dog("beagle", "white", "me");

    document.getElementById("bark").innerHTML = goodBoy.bark();
}