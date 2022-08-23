var text = [

    "Play Station 5 Bundles from $56/mo",

    "JBL True Wireless from $99.95",

    "Light. Bright. Full of might. From $42/mo"

];

var item1 = document.getElementById("carousel-item-1");
var item2 = document.getElementById("carousel-item-2");
var item3 = document.getElementById("carousel-item-3");

if (item1 === document.activeElement){
    console.log(text[0])
} else if (item2 === document.activeElement) {
    console.log(text[1])
} else {
    console.log(text[2])
}