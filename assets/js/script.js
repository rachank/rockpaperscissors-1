
/**List all constants for DOM elements and game options */

const startImage = document.querySelectorAll(".startimage");


/* GameBoard area - play game*/

function playGame(e) {
  console.log(e.target.id);
}

// Event Listener for initial click to play game
startImage.forEach(startimage => startimage.addEventListener('click', playGame));













