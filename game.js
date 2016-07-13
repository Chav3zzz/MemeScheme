var memeYPositions = [];
var memeXPositions = [];

var playerPicX = 370;
var playerPicY = 470;
var gameImage = new Image();
var enemyMeme = new Image();
var timeLived = 0;
var ACTIVE = false;
var gameOver = false;




// Starts the game by pressing the "enter key"
window.addEventListener('keydown', start);
function start(eKey){
  if(eKey.keyCode == 13 ){
    ACTIVE = true;
    playerImage();
    memeCanvas.addEventListener("keydown", drawPlayer);
    window.removeEventListener('keydown', start);
  }
}


// Image gets created inside of the canvas
function playerImage() {
    gameImage = new Image();
    enemyMeme = new Image();
    enemyMeme.src = "bob100.png"
    gameImage.src = "sadpepe40.png";
    memeCanvas.addEventListener("mousemove", drawPlayer);
    setInterval(redrawMeme, 1);
    setInterval(redrawMeme, 5.5);

}

// Image follows the mouse
function drawPlayer(mouseEvent) {
    playerPicX = mouseEvent.offsetX;
    playerPicY = mouseEvent.offsetY;
}

// Draws meme enemy onto the canvas
function redrawMeme() {

  var currentEnemyNumber = 0;
  var numberOfEnemies = memeXPositions.length;
  enemyMeme.src = "bob100.png"
  gameImage.src = "sadpepe40.png";




  //adds infinite memes to the array
  if (Math.random() < 2/70) {
      memeYPositions.push(0);
      memeXPositions.push(Math.random() * 800);

  }
  if(ACTIVE){
    while (currentEnemyNumber < numberOfEnemies ) {
      memeYPositions[currentEnemyNumber] = memeYPositions[currentEnemyNumber] + 1;
      currentEnemyNumber = currentEnemyNumber + 1;
    }

    memeCanvas.width = 800;     //clears the canvas
    memeCanvas.getContext("2d").drawImage(gameImage, playerPicX, playerPicY);


    currentEnemyNumber = 0;
    while (currentEnemyNumber < numberOfEnemies) {
      memeCanvas.getContext("2d").drawImage(enemyMeme, memeXPositions[currentEnemyNumber], memeYPositions[currentEnemyNumber]);
      currentEnemyNumber = currentEnemyNumber + 1;
    }
  }

  // This is collision with the player and enemy
  currentEnemyNumber = 0;
  while (currentEnemyNumber < numberOfEnemies) {
    if ( ( (playerPicX < memeXPositions[currentEnemyNumber] && //
            memeXPositions[currentEnemyNumber] < playerPicX + 10) ||
            (memeXPositions[currentEnemyNumber] < playerPicX &&
            playerPicX < memeXPositions[currentEnemyNumber] + 60) ) &&
            ( (playerPicY < memeYPositions[currentEnemyNumber] &&
            memeYPositions[currentEnemyNumber] < playerPicY + 33) ||
            (memeYPositions[currentEnemyNumber] < playerPicY &&
            playerPicY < memeYPositions[currentEnemyNumber] + 30) ) ) {

      lose();

    }
    currentEnemyNumber = currentEnemyNumber + 1;
    }
    timeLived = timeLived + 1;
    if(!gameOver) $("#score").html(timeLived)
  }

  // Restarts the game when lost
  function restart() {
      memeXPositions = [];
      memeYPositions = [];
      timeLived = 0;
  }

// This function gets called when the player hits an enemy
  function lose() {
    gameOver = true;
    var canvas = document.getElementById("memeCanvas");
    var context = canvas.getContext("2d");
    var restartPage = canvas.getContext("2d");
      memeCanvas.width  = 800;
      context.fillStyle = "#01B500";
      context.font      = "bold 70px Arial";
      context.fillText("lol you're a loser!!!", 100, 250);
      restartPage.font  = "bold 60px Arial";
      restartPage.fillText("spacebar to restart", 140, 350);
      ACTIVE            = false;
      restart();
  }


// Changes the text on the canvas
    var canvas = document.getElementById("memeCanvas");
    var context = canvas.getContext("2d");
    var intro = canvas.getContext("2d");
      context.fillStyle = "#01B500";
      context.font = "bold 70px Arial";
      context.fillText("press enter to start", 90, 330);
      intro.font = "bold 30px Arial";
      context.fillText("escape the memes with your mouse", 145, 250);


  // $('button').on('click',function () { location.reload()})


  window.addEventListener('keydown', spaceBar);
  function spaceBar(bar){
    if(bar.keyCode == 32 ){
      location.reload ();
    }
  }
