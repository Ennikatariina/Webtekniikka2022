//1a
document.querySelector("h2").textContent="Let's manipulate some DOM again!";

//1b
let content = document.getElementById("content")
content.lastElementChild.remove();

//1c
let article = document.querySelector("article");
let firstChild = article.firstElementChild;
let lastChild = article.lastElementChild;

let temp = firstChild.textContent;
firstChild.textContent=lastChild.textContent;
lastChild.textContent= temp;

//1d 
let ul = document.createElement("ul");
for (let i = 1; i < 6; i++) {
    let li =document.createElement("li");
    li.textContent ="Number" + i;
    ul.appendChild(li);
}
content.appendChild(ul);

//1e