let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const option = ["rock", "paper" , "sissior"];
    const randomInx = Math.floor(Math.random() * 3);
    return option[randomInx];
}

const drewGame = () => {
   
    msg.innerText = "game was draw!"
    msg.style.backgroundColor ="black"

    


}

const showWinner = (userWin , userChoice ,compChoice) => {
    if(userWin){
        
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green"
        } else {
       
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red"



    }
}

const playGame = (userChoice) => {
   console.log("user choice = ",userChoice);
   const compChoice = gencompchoice();
   console.log("comp choice = ",compChoice);

   if(userChoice === compChoice){
    drewGame();
   } else {
    let userWin = true;
    if(userChoice === "rock"){
        // paper ,sissior
         userWin = compChoice === "paper" ? false : true;
         }else if(userChoice === "paper"){
            // rock , sissior
            userWin = compChoice === "sissior" ? false : true;
         } else {
            // rock, paper 
             userWin = compChoice === "rock" ? false : true;
         }
         showWinner(userWin , userChoice, compChoice);
   }

}

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })

})