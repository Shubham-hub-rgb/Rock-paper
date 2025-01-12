let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorePara = document.querySelector("#user-score")
const compscorePara = document.querySelector("#comp-score")

const getcompchoice = () => {
    const options = ["rock","paper","scissors"];
    const rndopt = Math.floor(Math.random()*3);
    return options[rndopt];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true){
        userscore++;
        userscorePara.innerText = userscore;
        console.log("You win!")
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        console.log("You lose.")
        compscore++;
        compscorePara.innerText = userscore;
        msg.innerText = `You win! ${userChoice} beats your ${compChoice}`
         msg.style.backgroundColor = "red"
    } 
}

const drawgame = () => {
    msg.innerText = "Game was Draw , Play again."
    msg.style.backgroundColor = "#081b31"
}

const playgame = (userchoice) => {
    const compchoice = getcompchoice();

    if (userchoice === compchoice){
        drawgame();
    } else {
        let userWin = true;
        if(userchoice == "rock"){
            userWin = compchoice === "paper" ? false : true;
        } else if(userWin = "paper"){
           userWin = compchoice === "scissors" ? false : true; 
        } else {
            compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice,compchoice);
    }   
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})