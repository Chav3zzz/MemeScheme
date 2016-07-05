// Image gets created inside of the canvas
function playerImage() {
    var gameCanvas = document.getElementById("memeCanvas");
    var gameImage = new Image();

    gameImage.src = "pepeby45.png";
    memeCanvas.getContext("2d").drawImage(gameImage, Math.random() * 100, Math.random() * 100);

    memeCanvas.addEventListener("mousemove", drawPlayer);
}


// Image follows the mouse
function drawPlayer(mouseEvent) {
    var gameCanvas = document.getElementById("memeCanvas");
    var gameImage = new Image();

    gameImage.src = "pepeby45.png";
    memeCanvas.width = 640; //clears the canvas
    memeCanvas.getContext("2d").drawImage(gameImage, mouseEvent.offsetX, mouseEvent.offsetY);
}
