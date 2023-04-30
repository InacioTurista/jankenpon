const options = ["rock", "paper", "scissor"];

let yourPick = options[Math.floor(Math.random() * 2)];
let myPick;
let score;
var previousImage = null;

document.getElementById();

function selectYourPick(option) {
  yourPick = option;
  myPick = options[Math.floor(Math.random() * 2)];

  if (
    (yourPick == "rock" && myPick == "paper") ||
    (yourPick == "paper" && myPick == "scissor") ||
    (yourPick == "scissor" && myPick == "rock")
  ) {
    score = "I Won!";
  } else if (
    (yourPick == "rock" && myPick == "scissor") ||
    (yourPick == "paper" && myPick == "rock") ||
    (yourPick == "scissor" && myPick == "paper")
  ) {
    score = "You Won!";
  } else {
    score = "Draw!";
  }
}

function image(src) {
  // This will check if there is any img, if true it will be deleted before putting the new one
  if (previousImage !== null) {
    previousImage.remove();
  }

  var img = document.createElement("img");
  img.src = src;
  img.classList.add("yourImageFeatures");
  document.body.appendChild(img);

  // To update my previousImage
  previousImage = img;
}
