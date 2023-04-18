/**List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;
//const winnerResult = document.getElementById("winnerResult"); 
//add above to HTML Modal div
const modal = document.getElementsByClassName(".modal")
let winImages = document.getElementsByClassName(".winimages");
let loseImages = document.getElementsByClassName(".loseimages");

/* GameBoard area - play game*/

function playGame(e) {
    const pPick = e.target.id;
    findCompPick();
    const checkWinner = findWinner(pPick, compPick);
    console.log(pPick, compPick, checkWinner);
}

// Event Listener for each initial click on start images to play game
startImages.forEach(startimage => startimage.addEventListener('click', playGame));

//Get computer random choice of image for game function
function findCompPick() {
    const randPick = Math.floor(Math.random() * 3) + 1;
    switch (randPick) {
        case 1:
            compPick = "rock";
            break;
        case 2:
            compPick = "paper";
            break;
        case 3:
            compPick = "scissors";
            break;
    }
}
//Get the Winner of the game
function findWinner(pPick, compPick) {
    if (pPick === compPick) {
        return "tie";
    } else if (pPick === "rock") {
        if (compPick === "paper") {
            return "computer";
     } else {
        return "player";
     }     
    } else if (pPick === "paper") {
        if (compPick === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (pPick === "scissors") {
        if (compPick === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}

// Determine winner image to display
function findWinnerImage(pPick, compPick) {

}

// Determine loser image to display
function findWinnerImage(pPick, compPick) {

}

// Display Winner of game, Player choice and Computer choice
function displayWinner(checkWinner, pPick, compPick) {
    if(checkWinner === "player" && pPick === "rock") {




    //Increment player score

    //Show modal result
    winnerResult.innerHTML = ``;
    }
}

//new code to add

const CHARACTERS = [
    {
        'name': 'rock',
        'beats': 'scissors',
    },
    {
        'name': 'paper',
        'beats': 'rock',
    },
    {
        'name': 'scissors'
        'beats': 'paper',
    },
]

const HAPPY_EXPRESSIONS = [
    'laugh',
    'smile',
    'tease',
    'wink'
]

const SAD_EXPRESSIONS = [
    'dazed'
    'grumpy'
    'sad'
    'surprised'
]

const HAPPY_IMAGES_DIR = 'assets/images/images-win/'
const SAD_IMAGES_DIR = 'assets/images/images-lose/'

const computerImageContainer = document.getElementById('computer-image-container')
const playerImageContainer = document.getElementById('player-image-container')

function getRandomItemInArray(array) {
    let randomIndexInArray = Math.floor(Math.random() * array.length)
    return array[randomIndexInArray]
}

function getComputerChoice() {
    return getRandomItemInArray(CHARACTERS)
}

function displayWinner(playerChoice, computerChoice) {

    let computerImage = document.createElement('img')
    let playerImage = document.createElement('img')

    if (playerChoice.beats === computerChoice.name) {
        // player beats computer -- show happy player, sad computer

        // e.g. assets/images/images-win/rock-win.jpg
        playerImage.src = `${HAPPY_IMAGES_DIR}${playerChoice.name}-win.jpg`
        // if you wanted to add the random happy expression:
        // e.g. assets/images/images-win/rock-win-laugh.jpg
        // let happyExpression = getRandomItemInArray(HAPPY_EXPRESSIONS)
        // playerImage.src = `${HAPPY_IMAGES_DIR}${playerChoice.name}-win-${happyExpression}.jpg`
        playerImage.alt = `picture of happy ${playerChoice.name}`
        playerImage.classList.add(`happy${playerChoice.name}`)
