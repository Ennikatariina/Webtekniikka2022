/*lukee tiedot lomakkeelta */
let form=document.querySelector("form");

//Lisätään sumbit-kuuntelijan formiin
form.addEventListener("submit", sendData);
/**
 * 
 * @param{Event} event
 */
/*Funktio luo formData  */
function sendData(event){
    event.preventDefault();
    let formData =new FormData(form);
  
    let data={
        koko: formData.get("koko"),
        karva: formData.get("karva"),
    };
    console.log(data);
    return data
}

/*painiketta painamalla saadaan tulos näkyviin */
button.addEventListener("click", printResult);
/*Lisätään domiin kyselyn tulos */
function printResult(){
    let result= cat();
    let h5 = document.createElement("h5");
    let img = document.createElement("img");
    h5.textContent= result[0];
    img.setAttribute('src', result[1]);
    form.appendChild(h5);
    form.appendChild(img);
}
/*Funktio ottaa sendData funktiosta lomakkeen tiedot ja käyttää niitä tulosten analysointiin. Funktio palauttaa teksin ja kuvan rodusta joka sopii vastaajalle */
function cat(){
    let data2=sendData(event);
    let koko= data2.koko;
    let karva =data2.karva;
    let text= "";
    let imagescat="";
    if (koko=="iso" & karva=="pitka"){
        text = "Sinulla sopii ragdoll.";
        imagescat= "../images/ragdoll1.jpg";
    }
    else if (koko=="pieni" & karva=="pitka"){
        text = "Sinulla sopii pyhä birma.";
        imagescat= "../images/pyhabirma.jpg";
    }
    else if (koko=="pieni" & karva=="lyhyt"){
        text = "Sinulla sopii burma.";
        imagescat= "../images/burma.jpg";
    }
    else if (koko=="iso" & karva=="lyhyt"){
        text = "Sinulla sopii abessinialainen.";
        imagescat= "../images/abessinialinen.jpg";
    }
    else {
        alert ("Vastaa kyselyn kaikkiin kysymyksiin.")
    }
    let result =[text, imagescat]
    return result
}

/*Vaihtaa kysymyslaation väriä, kun valitsee toisen vaihtoehdon */
q11Input.addEventListener("click", function(){
    document.getElementById("q1").classList.add("boxstyle_answered");
});
q12Input.addEventListener("click", function(){
    document.getElementById("q1").classList.add("boxstyle_answered");
});
q21Input.addEventListener("click", function(){
    document.getElementById("q2").classList.add("boxstyle_answered");
});
q22Input.addEventListener("click", function(){
    document.getElementById("q2").classList.add("boxstyle_answered");
})


/*Randon kissakuva  */
fetch("https://cataas.com/cat?json=true")
    .then(response => response.json())
    .then(
        data =>{
        let imgCat= document.createElement("img")
        imgCat.src="https://cataas.com/" + data.url;
        document.getElementById("randomcat").appendChild(imgCat);
        }
        );

        
            