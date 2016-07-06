var enemyY = 0;
var playerPicX = 275;
var playerPicY = 275;
var gameImage = new Image();
var memeImage = new Image();
var enemyMeme = new Image();

// Image gets created inside of the canvas
function playerImage() {
    gameImage.src = "pepeby45.png";
    memeCanvas.getContext("2d").drawImage(gameImage, Math.random() * 100, Math.random() * 100);
    memeCanvas.addEventListener("mousemove", drawPlayer);
    setInterval(redrawMeme, 7);

}

// Image follows the mouse
function drawPlayer(mouseEvent) {
    playerPicX = mouseEvent.offsetX;
    playerPicY = mouseEvent.offsetY;
}

// Draws meme enemy onto the canvas
function redrawMeme() {
    enemyY = enemyY + 1;    //increase enemyY variable by one pixel. If enemyY is 10, then enemyY + 1 is 11, etc.

    enemyMeme.src = "bob100.png";
    gameImage.src = "pepeby45.png";

    memeCanvas.width = 640;     //this erases the contents of the canvas
    memeCanvas.getContext("2d").drawImage(gameImage, playerPicX, playerPicY);
    memeCanvas.getContext("2d").drawImage(enemyMeme, 250, enemyY);
}




// Starts the game by pressing the "enter key"
window.addEventListener('keydown',function(eKey){
  if(eKey.keyCode == 13 ){
    playerImage();
    memeCanvas.width = 640; //clears the canvas
    memeCanvas.addEventListener("keydown", drawPlayer);
  }
})

// Changes the text on the canvas
  var canvas = document.getElementById("memeCanvas");
  var context = canvas.getContext("2d");
    context.fillStyle = "lime";
    context.font = "bold 50px Arial";
    context.fillText("press enter to start", 95, 250);
