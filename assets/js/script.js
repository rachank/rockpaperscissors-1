
/**List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");

let computer;

/* GameBoard area - play game*/

function playGame(e) {
  const pPick = e.target.id;
 
  const compPick = getCompPick();
}
console.log(pPick);

// Event Listener for each initial click on start images to play game
startImage.forEach(startimage => startimage.addEventListener('click', playGame));

//Computer random choice of images game function
  function getCompPick() {
    const randPick = Math.floor(Math.random() * 3) + 1;
    switch(randPick){
        case 1:
            computer = "rock"
            break;
        case 2:
            computer = "paper"
            break;
        case 3:
            computer = "scissors"
            break;
    }
  }
  console.log(compPick);
  
  











