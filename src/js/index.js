//Sides and result variables

const myPickOptions = {
  rock: "./src/images/rock.png",
  paper: "./src/images/paper.png",
  scissor: "./src/images/scissor.png",
};
const results = {
  draw: "./src/images/draw.png",
  win: "./src/images/win.png",
  lose: "./src/images/lose.png",
};
const myPickImgs = Object.values(myPickOptions);
let yourPick;
let myPick;
let score;
let count = 0;
let winTimes = 0;
let lostTimes = 0;
let drawTimes = 0;

const yourImgHtml = document.getElementById("your-img");
const myImgHtml = document.getElementById("my-img");
const resultImgHtml = document.getElementById("result-img");
const winTimesHtml = document.getElementById("win-times");
const lostTimesHtml = document.getElementById("lost-times");
const drawTimesHtml = document.getElementById("draw-times");
const choicesHtml = document.getElementsByClassName("choices");

//----------- Dark mode settings ------------//

const themeChangerButton = document.getElementById("theme-changer-button");
const body = document.querySelector("body");
const changeThemeImage = document.querySelector(".button-image");

themeChangerButton.addEventListener("click", () => {
  const darkModeIsOn = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeIsOn) {
    changeThemeImage.setAttribute("src", "./src/images/sun.png");
  } else {
    changeThemeImage.setAttribute("src", "./src/images/moon.png");
  }
});

//--------------- Responsible for setting the images ----------------------//

function image(src, local) {
  let adiv = document.getElementById(local);
  adiv.src = src;
  adiv.classList.add("imageFeatures");

  // Added this if statement to hide all the images in the right moment
  if (count % 3 === 0) {
    yourImgHtml.classList.add("hidden");
    myImgHtml.classList.add("hidden");
    resultImgHtml.classList.add("hidden");
  }

  // Added this setTimeout so the image stays a little time hidden before it's shown again.
  setTimeout(function () {
    adiv.classList.remove("hidden");
  }, 300);

  count++;
}

//-------------------- yourPick's Event listeners --------------------//

let choiceArr = [...choicesHtml];
choiceArr.map((a) => a.addEventListener("click", handleClick));

function handleClick() {
  choiceArr.map((a) => a.removeEventListener("click", handleClick));
  return (
    image(this.src, "your-img"),
    result(choiceArr.indexOf(this)),
    choiceArr.map((a) => repeat(a))
  );
}

function repeat(a) {
  //add new event listener
  setTimeout(() => {
    a.addEventListener("click", handleClick);
  }, 2800);
}
// Add event listener back after 3 seconds

//--------------------- ------------------------ --------------------//

//Result and myPick's choice print

function result(yourOption) {
  let random = [Math.floor(Math.random() * 3)];
  yourPick = yourOption;
  myPick = random;

  // Added this setTimeout so it delays when my-img it's shown.
  setTimeout(function () {
    image(myPickImgs[random], "my-img");
  }, 800);

  // ------------------------------------------------ //
  let vs = yourPick - myPick;
  // vs equals 2 || -1 print "I won";
  // vs equals -2 || 1 print "You won";
  // vs == 0 print "Draw";
  vs == 0
    ? (score = "draw")
    : vs == 2 || vs == -1
    ? (score = "lose")
    : (score = "win");

  // Lastly, I added another setTimeout to delay when result-img it's shown.
  setTimeout(function () {
    image(results[score], "result-img");
  }, 1400);

  setTimeout(function () {
    switch (score) {
      case "win":
        winTimes++;
        winTimesHtml.textContent = `${winTimes}`;
        break;
      case "lose":
        lostTimes++;
        lostTimesHtml.textContent = `${lostTimes}`;
        break;
      default:
        drawTimes++;
        drawTimesHtml.textContent = `${drawTimes}`;
    }
  }, 2200);
}
