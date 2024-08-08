let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}
const drawGame = () => {
    msg.innerHTML = "Draw!";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) => {
    const compChoice = getcompchoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
