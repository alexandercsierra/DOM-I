


let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");


function timer(){
var counter = setInterval(function(){ 
    if (msTens.textContent === "-"){
        msTens.textContent = 0;
        msHundreds.textContent = 0;
        secondOnes.textContent = 0;
        secondTens.textContent = 0;
    } else if (msTens.textContent < 9){
        msTens.textContent++;
    } else if (msTens.textContent = 9){
        msTens.textContent = 0;
        if (msHundreds.textContent < 9){
            msHundreds.textContent++;
        } else {
            msHundreds.textContent = 0;
            if (secondOnes.textContent < 9){
                secondOnes.textContent++;
            } else {
                secondOnes.textContent = 0;
                if (secondTens.textContent = 1){
                    // secondTens.textContent++;
                    msTens.style.color = "red";
                    msHundreds.style.color = "red";
                    secondOnes.style.color = "red";
                    secondTens.style.color = "red";
                    clearInterval(counter);
                } 
                
            }
        }
    }
        
    // } else if (msHundreds.textContent = 9){
    //     msHundreds.textContent = 0;
    //     console.log("seconds should change");
    // }


}, 10);
}

let start = document.querySelector(".start");
start.addEventListener("click", e => {
    timer();
    start.disabled = true;
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", e => {
    start.disabled = false;
    // clearInterval(timer);
});
