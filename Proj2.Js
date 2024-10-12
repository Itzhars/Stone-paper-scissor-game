let userScore=0;
let CompScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#User-score")
const compScorePara=document.querySelector("#Comp-score")


const genCompChoice=()=>{
    const Options=["rock","paper","scissors"];
    const rndIdx=Math.floor(Math.random()*3);
    return Options[rndIdx];

}

const drawGame=()=>{
   // console.log("game was draw.");
    msg.innerText="Game Was Draw! Play again";
    msg.style.backgroundColor="#081b31";

    

};

const ShowWinner=(UserWin,userChoice,compChoice)=>{
    if(UserWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        CompScore++;
        compScorePara.innerText=CompScore;
        //console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice} `;;
        msg.style.backgroundColor="red";
    }
}

const PalyGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    //Generate Computer Choice -> Modular 
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice)

    if(userChoice==compChoice){
        //return the Game was Draw 
        drawGame();

    }

    else{
        let UserWin=true;
        if(userChoice==="rock"){
            //Scissors,Paper
            UserWin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            //rock ,Scissors 
            UserWin=compChoice==="scissors"?false:true;


        }else{
            if(userChoice==="scissors"){
                UserWin=compChoice==="rock"?false:true;

            }
        }
        ShowWinner(UserWin,userChoice,compChoice,);


    }






};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        PalyGame(userChoice);
    });
    
});

