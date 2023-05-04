//Sides and result variables

const myPickOptions = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissor: "images/scissor.png",
};
const results = {
  draw: "images/draw.png",
  win: "images/win.png",
  lose: "images/lose.png",
};
const myPickImgs = Object.values(myPickOptions);
let yourPick;
let myPick;
let score;
let count = 0;
let winTimes = 0;
let lostTimes = 0;
let drawTimes = 0;

//--------------- Responsible for setting the images ----------------------//

function image(src, local) {
  let adiv = document.getElementById(local);

  // Added this if statement to hide all the images in the right moment
  if (count % 3 === 0) {
    document.getElementById("your-img").classList.remove("imageFeatures");
    document.getElementById("my-img").classList.remove("imageFeatures");
    document.getElementById("result-img").classList.remove("imageFeatures");
    document.getElementById("your-img").classList.add("hidden");
    document.getElementById("my-img").classList.add("hidden");
    document.getElementById("result-img").classList.add("hidden");
  }

  adiv.src = src;

  // Added this setTimeout so the image stays a little time hidden before it's shown again.
  setTimeout(function () {
    adiv.classList.remove("hidden");
  }, 400);

  adiv.classList.add("imageFeatures");

  count++;
}

//-------------------- yourPick's Event listeners --------------------//

let choice = document.getElementsByClassName("choices");
let choiceArr = [...choice];
console.log(choiceArr);
choiceArr.map((a) =>
  a.addEventListener("click", () => {
    return image(a.src, "your-img"), result(choiceArr.indexOf(a));
  })
);
//--------------------- ------------------------ --------------------//

//Result and myPick's choice print

function result(yourOption) {
  let random = [Math.round(Math.random() * 2)];
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
        document.getElementById("win-times").textContent = `${winTimes}`;
        break;
      case "lose":
        lostTimes++;
        document.getElementById("lost-times").textContent = `${lostTimes}`;
        break;
      default:
        drawTimes++;
        document.getElementById("draw-times").textContent = `${drawTimes}`;
    }
  }, 2200);
}
