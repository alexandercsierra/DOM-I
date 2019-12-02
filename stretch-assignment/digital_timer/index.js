


let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let isReset = false;


function timer(){
    clearInterval(counter);
    var counter = setInterval(function(){ 
        if (isReset === false){
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
                            msTens.style.color = "red";
                            msHundreds.style.color = "red";
                            secondOnes.style.color = "red";
                            secondTens.style.color = "red";
                            clearInterval(counter);
                        } 
                        
                    }
                }
            }
            


        } else {
            msTens.textContent = "0";
            msHundreds.textContent = "0";
            secondOnes.textContent = "0";
            secondTens.textContent = "0";
            msTens.style.color = "black";
            msHundreds.style.color = "black";
            secondOnes.style.color = "black";
            secondTens.style.color = "black";
            clearInterval(counter);
        }
    }, 10);
}

let start = document.querySelector(".start");
start.addEventListener("click", e => {
    isReset = false;
    clearInterval(timer);
    timer();
    start.disabled = true;
    start.style.background = "#517355";
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", e => {
    isReset = true;
    clearInterval(timer);
    start.disabled = false;
    start.style.background = "#26c73e";
        
    
    msTens.textContent = "0";
    msHundreds.textContent = "0";
    secondOnes.textContent = "0";
    secondTens.textContent = "0";
    msTens.style.color = "black";
    msHundreds.style.color = "black";
    secondOnes.style.color = "black";
    secondTens.style.color = "black";
    
    

});