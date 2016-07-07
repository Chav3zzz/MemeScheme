var memeYPositions = [];
var memeXPositions = [];


var playerPicX = 275;
var playerPicY = 275;
var gameImage = new Image();
var memeImage = new Image();
var enemyMeme = new Image();
var timeLived = 0;


// Image gets created inside of the canvas
function playerImage() {
    gameImage.src = "sadpepe40.png";
    memeCanvas.getContext("2d").drawImage(gameImage, Math.random() * 100, Math.random() * 100);
    memeCanvas.addEventListener("mousemove", drawPlayer);
    setInterval(redrawMeme, 1);

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
    enemyMeme.src = "bob100.png";
    gameImage.src = "sadpepe40.png";


//adds infinite memes to the array
if (Math.random() < 3/70) {
    memeYPositions.push(0);
    memeXPositions.push(Math.random() * 800);
}

  while (currentEnemyNumber < numberOfEnemies) {
    memeYPositions[currentEnemyNumber] = memeYPositions[currentEnemyNumber] + 1;
    currentEnemyNumber = currentEnemyNumber + 1;
    }

    memeCanvas.width = 800;     //this erases the contents of the canvas
    memeCanvas.getContext("2d").drawImage(gameImage, playerPicX, playerPicY);

    currentEnemyNumber = 0;
  while (currentEnemyNumber < numberOfEnemies) {
    memeCanvas.getContext("2d").drawImage(enemyMeme, memeXPositions[currentEnemyNumber], memeYPositions[currentEnemyNumber]);
    currentEnemyNumber = currentEnemyNumber + 1;
  }

    currentEnemyNumber = 0;
  while (currentEnemyNumber < numberOfEnemies) {
    if ( ( (playerPicX < memeXPositions[currentEnemyNumber] && memeXPositions[currentEnemyNumber] < playerPicX + 25) || (memeXPositions[currentEnemyNumber] < playerPicX && playerPicX < memeXPositions[currentEnemyNumber] + 40) ) && ( (playerPicY < memeYPositions[currentEnemyNumber] && memeYPositions[currentEnemyNumber] < playerPicY + 25) || (memeYPositions[currentEnemyNumber] < playerPicY && playerPicY < memeYPositions[currentEnemyNumber] + 32) ) ) {
        alert("lol you loser. Distance: " + timeLived);
        restart();
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


// Starts the game by pressing the "enter key"
window.addEventListener('keydown',function(eKey){
  if(eKey.keyCode == 13 ){
    playerImage();
    memeCanvas.width = 800; //clears the canvas
    memeCanvas.addEventListener("keydown", drawPlayer);
  }
})

// Changes the text on the canvas
  var canvas = document.getElementById("memeCanvas");
  var context = canvas.getContext("2d");
    context.fillStyle = "lime";
    context.font = "bold 50px Arial";
    context.fillText("press enter to start", 175, 300);
