let userResult = document.querySelector("#userResult");
let computerResult = document.querySelector("#computerResult");
let result = document.querySelector("#result");
let choices = ["Rock", "Paper", "Scissors"];

function play(usersChoice) {
    userResult.innerHTML = `User's Choice: ${usersChoice}`;

    let computersChoice = choices[Math.floor(Math.random() * 3)];

    computerResult.innerHTML = `Computer's Choice: ${computersChoice}`;

    if (usersChoice == computersChoice) {
        result.innerHTML = "Its a Tie 🟰 !";
    } else if (
        (usersChoice == "Rock" && computersChoice == "Scissors") ||
        (usersChoice == "Paper" && computersChoice == "Rock") ||
        (usersChoice == "Scissors" && computersChoice == "Paper")
    ) {
        result.innerHTML = "User Wins🏆!";
    } else {
        result.innerHTML = "Computer Wins🖥️🏆!";
    }
}