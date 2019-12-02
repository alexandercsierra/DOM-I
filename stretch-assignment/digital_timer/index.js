


let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");

setInterval(function(){ 
    if (msTens.textContent === "-"){
        msTens.textContent = 0;
        msHundreds.textContent = 0;
    } else if (msTens.textContent < 9){
        msTens.textContent++;
    } else if (msTens.textContent = 9){
        msTens.textContent = 0;
        msHundreds.textContent++;
    }



}, 10);