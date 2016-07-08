var memeYPositions = [];
var memeXPositions = [];

var playerPicX = 370;
var playerPicY = 470;
var gameImage = new Image();
var memeImage = new Image();
var enemyMeme = new Image();
var timeLived = 0;
var ACTIVE = false;


// Image gets created inside of the canvas
function playerImage() {
    gameImage.src = "sadpepe40.png";
    memeCanvas.getContext("2d").drawImage(gameImage, Math.random() * 100, Math.random() * 100);
    memeCanvas.addEventListener("mousemove", drawPlayer);
    setInterval(redrawMeme, 1);
    setInterval(redrawMeme, 7);

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
  if (Math.random() < 3/70) {
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
  }

  // Restarts the game when lost
  function restart() {
      memeXPositions = [];
      memeYPositions = [];
      timeLived = 0;
  }

  function lose() {
    var canvas = document.getElementById("memeCanvas");
    var context = canvas.getContext("2d");
      memeCanvas.width  = 800;
      context.fillStyle = "#00FFFF";
      context.font      = "bold 50px Arial";
      context.fillText("lol you're loser. memes: " + timeLived, 70, 200);
      ACTIVE            = false;
      restart();
  }


// Starts the game by pressing the "enter key"
window.addEventListener('keydown', start);
function start(eKey){
  if(eKey.keyCode == 13 ){
    ACTIVE = true;
    playerImage();
    memeCanvas.width = 800; //clears the canvas
    memeCanvas.addEventListener("keydown", drawPlayer);
    window.removeEventListener('keydown', start);
  }
}


// Changes the text on the canvas
  var canvas = document.getElementById("memeCanvas");
  var context = canvas.getContext("2d");
    context.fillStyle = "lime";
    context.font = "bold 70px Arial";
    context.fillText("press enter to start", 90, 300);


  $('button').on('click',function () { location.reload()})
