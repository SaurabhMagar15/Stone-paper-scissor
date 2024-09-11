const h2=document.querySelector("h2");
const images=document.querySelectorAll("img");
var p=document.querySelectorAll("p");
let button=document.querySelector(".btn");
let comp=0;
let you=0;
function newGame(comp,you){
button.addEventListener('click',()=>{
    p[2].innerText=0;
    p[4].innerText=0;
    h2.innerText="start";
    
})
}
newGame();

function ani(){
for(let i=0;i<3;i++){
    images[i].addEventListener('mouseover',()=>{
        images[i].classList.add("animations");
    })
    images[i].addEventListener('mouseleave',()=>{
        images[i].classList.remove("animations");
    })
}
}
ani();





function chooseSymbol()
{   
    for(let i=0;i<3;i++){
        images[i].addEventListener("click",()=>{
            let computerInput=Math.floor(Math.random()*3);
            var userInput=i;
            console.log("user",userInput);
            console.log("computer ",computerInput)
            chooseWinner(userInput,computerInput);
            
            
        })

    }
    
}
chooseSymbol();

function chooseWinner(userInput,computerInput){
    let Winner="";
    if(userInput==computerInput){
        Winner="It's a Tie";
    }
    else if(userInput==1 && computerInput==2){
        Winner="computer";
    }
    else if(userInput==0 && computerInput==1){
        Winner="computer";
    }
    else if(userInput==0 && computerInput==2){
        Winner="player";
    }
    else if(userInput==2 && computerInput==1){
        Winner="player";
    }
    else if(userInput==1 && computerInput==0){
        Winner="player";
    }
    else if(userInput==2 && computerInput==0){
        Winner="computer";
    }

    if(p[2].innerText=="0" && p[4].innerText=="0"){
        you=0;
        comp=0;
    }
    
            
    if(Winner=="computer"){
        comp++;
        p[4].innerText=comp;

        
    }
    else if(Winner=="player"){
        you++;
        p[2].innerText=you;

        
    }
    Winner="Winner is "+ Winner;
    h2.innerText=Winner;
    

}


