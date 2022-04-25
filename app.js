let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputereChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You WIN!`;
    document.getElementById(userChoice).classList.add('green-glow');
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
    setTimeout(function () { document.getElementById(computerChoice).classList.remove('red-glow') }, 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats
        ${convertToWord(userChoice)}. You LOSE!`;
    document.getElementById(userChoice).classList.add('red-glow');
    document.getElementById(computerChoice).classList.add('green-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
    setTimeout(function () { document.getElementById(computerChoice).classList.remove('green-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(computerChoice)} equals
    ${convertToWord(userChoice)}. Its a DRAW!`;

    document.getElementById(userChoice).classList.add('orange-glow');

    setTimeout(function () { document.getElementById(userChoice).classList.remove('orange-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputereChoice();
    console.log(computerChoice + " " + userChoice);

    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();