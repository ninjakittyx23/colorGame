var colors = GenerateRandomColors(6);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
var correctSound = document.querySelector("#correct-sound")
var wrongSound = document.querySelector("#wrong-sound")

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = GenerateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6
    colors = GenerateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = GenerateRandomColors(numSquares)
        //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
        //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "#4682b4"
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //Add click listeners to square
    squares[i].addEventListener("click", function() {
        //Grab color of clicked square 
        var clickedColor = this.style.backgroundColor;
        //Compare color to pickedColor
        console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct :D";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            correctSound.play()
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again, Bud :(";
            wrongSound.play()
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function GenerateRandomColors(num) {
    //Make an array
    var arr = []
        //Add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color & push into array variable
        arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor() {
    //pick a red from 0 - 255
    var red = Math.floor(Math.random() * 256)
        //pick a green from 0 - 255
    var green = Math.floor(Math.random() * 256)
        //pick a blue from 0 - 255
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}