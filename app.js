let btns = document.querySelectorAll(".btn");

let h1 = document.querySelector("h1");

let result = document.querySelector(".result");

let random = Math.floor(Math.random() * 12) + 1;

let history = [];

let winHistory = document.querySelector(".winHistory"); 

let isClicked = false;

for(btn of btns){

    
    btn.addEventListener("click", function(event){
        if(isClicked) return;
        isClicked = true;
        // h1.innerText = "";
        // add a timer function before the result is shown
        if(event.target.nodeName === "DIV" || event.target.nodeName === "P"){

            if(random > 7){
                console.log("up clicked")
                if(event.target.id === "uptext" || event.target.id=== "upbtn"){
                    counting();
                    displayResult(true);
                }
                else{
                    counting();
                    displayResult(false);
                }
                
            }else if(random == 7){
                console.log("equal to 7 clicked")
                if(event.target.id === "equaltext" || event.target.id=== "equalbtn"){
                    counting();
                    displayResult(true);
                }
                else{
                    counting();
                    displayResult(false);
                }
            }else if(random < 7){
                console.log("down clicked")
                if(event.target.id === "downtext" || event.target.id=== "downbtn"){
                    counting();
                    displayResult(true);
                }
                else{
                    counting();
                    displayResult(false);
                }
            }
        }
        setTimeout(restartGame,5000);
    })

}

function counting(){
    h1.innerText = "counting";
    // result.innerText = "counting";
}

function displayResult(win){
    if(win){
        setTimeout(function(){
            h1.innerText = random;
            result.innerText = "you win!";
        }, 2000)
    }else{
        setTimeout(function(){
            h1.innerText = random;
            result.innerText = "you lose!";
        }, 2000)
    }
}


function restartGame(){
    random = Math.floor(Math.random() * 12) + 1;
    h1.innerText = "select";
    result.innerText = "";
    isClicked = false;

}
