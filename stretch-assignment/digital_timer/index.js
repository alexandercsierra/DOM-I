


let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");



setInterval(function(){ 
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
                if (secondTens.textContent < 9){
                    secondTens.textContent++;
                } else {
                    secondTens.textContent = 0;
                    
                }
                
            }
        }
    }
        
    // } else if (msHundreds.textContent = 9){
    //     msHundreds.textContent = 0;
    //     console.log("seconds should change");
    // }


}, 10);