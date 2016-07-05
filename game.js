// Image gets created inside of the canvas
function playerImage() {
    var memeCanvas = document.getElementById("memeCanvas");
    var gameImage = new Image();

    gameImage.src = "pepeby45.png";
    memeCanvas.getContext("2d").drawImage(gameImage, Math.random() * 100, Math.random() * 100);
    memeCanvas.addEventListener("mousemove", drawPlayer);
}

// Starts the game by pressing the "enter key"
window.addEventListener('keydown',function(eKey){
  if(eKey.keyCode == 13 ){
        playerImage();
  }
})



// Image follows the mouse
function drawPlayer(mouseEvent) {
    var memeCanvas = document.getElementById("memeCanvas");
    var gameImage = new Image();

    gameImage.src = "pepeby45.png";
    memeCanvas.width = 640; //clears the canvas
    memeCanvas.getContext("2d").drawImage(gameImage, mouseEvent.offsetX, mouseEvent.offsetY);
}



var canvas = document.getElementById("memeCanvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "lime";
  context.font = "bold 50px Arial";
  context.fillText("press enter to start", 95, 250);
