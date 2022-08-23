var text = [

    "Play Station 5 Bundles from $56/mo",

    "JBL True Wireless from $99.95",

    "Light. Bright. Full of might. From $42/mo"

];

var counter = 0;

var elem = document.getElementById("changeText");

elem.innerHTML = text[counter];

console.log("Counter: " + counter);

console.log("Text: " + text[counter]);

var change = setInterval(function () {

    if (counter >= text.length-1) {

        counter = 0;

    } else {

        counter++;

    }

    console.log("Counter: " + counter);

    console.log("Text: " + text[counter]);

    elem.innerHTML = text[counter];

}, 5000);