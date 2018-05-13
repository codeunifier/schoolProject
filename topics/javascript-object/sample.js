function myFunction() {
    var object = {};

    object.something = "good";
    object.func = function () {
        console.log("I'm feeling " + this.something);
    }

    object.func();
}