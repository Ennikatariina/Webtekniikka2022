// Tapahtumankäsittelijä painikkeelle
document.getElementById("submit").onclick=function(){
    //Painiketta klikattu
    //Luetaan input-kentän sisältö
    let name = document.getElementById("name").value;
    //Jos kentässä sisältä
    if (name.length > 0){
        //Näytä success -alert
        document.getElementById("form-success").style.display="block";
        //Piilotetaan success-alert
        document.getElementById("form-warming").style.display ="none";
    }
    //jos ei 
    else{
        //Näytä success -alert
        document.getElementById("form-warming").style.display="block";
        document.getElementById("form-success").style.display ="none";
    }
    
    return false; 
}
