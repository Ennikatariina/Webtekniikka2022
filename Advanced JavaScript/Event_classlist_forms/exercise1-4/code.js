//Tehtävä 1
let h1 = document.querySelector("h1");
h1.classList.add("important");

//inline
h1.style.width="80%"

//Tehtävä 2
//let divi = document.querySelector("#divi");
//let p = document.createElement("p");
//p.textContent="Maanantai";
//divi.append(p);

let p = document.querySelector("p");
p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);

function changeColor(){
    p.classList.toggle("textcolor");
}

//tehtävä 2a (vaihdetaan teksin taustaväri, kun klikataan tekstiä )
p.addEventListener("click",changeBg);
function changeBg(){
    p.classList.toggle("textbg");
}

//tehtävä 3
let sotu = document.getElementById("sotu");
sotu.addEventListener("input",checkValid);
function checkValid(){
    let text =sotu.value;

    if (text.length ==11){
        sotu.classList.remove("invalid");
    }
    else{
        sotu.classList.add("invalid");
    }
}