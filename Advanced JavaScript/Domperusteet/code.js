//tehtävä 1a)
let elem = document.getElementById("content");
elem = document.querySelector("#content");
console.log(elem.tagName);

//tehtävä 1b)
elem = document.querySelector(".basic");
console.log(elem.tagName);

//tehtävä 1c)
let liElems =document.querySelectorAll("li")
//toinen tapa: liElems =document.getElementsByTagName("li")
for (elem of liElems) {
    console.log(elem.textContent);
}
//tehtävä 1d
let bodyDesc = document.querySelectorAll("body *");
for (elem of bodyDesc) {
    console.log(elem.nodeName);
}

//tehtävä 1e)
let articleDescP = document.querySelectorAll("article p");
for (elem of articleDescP) {
    console.log(elem.textContent);
}
//tehtävä 1f)
for (elem of liElems){
    elem.textContent= "John Doe"
}