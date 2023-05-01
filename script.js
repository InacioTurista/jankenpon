//Sides and result variables

const myPickOptions = {
  "rock": "images/rock.png",
  "paper": "images/paper.png",
  "scissor": "images/scissor.png"
};
const results = {
  "draw": "images/draw.png",
  "win": "images/win.png",
  "lose": "images/lose.png"
};
const myPickImgs = Object.values(myPickOptions);
let yourPick;
let myPick;
let score;

//--------------- Responsible for setting the images ----------------------//

function image(src, local) {
  let adiv = document.getElementById(local);
  adiv.src = src;
  adiv.classList.add("imageFeatures");

}

//-------------------- yourPick's Event listeners --------------------//

let choice = document.getElementsByClassName('choices');
let choiceArr = [...choice];
console.log(choiceArr)
choiceArr.map(a => a.addEventListener("click", () =>{ return image(a.src, "your-img"), result(choiceArr.indexOf(a))}));
//--------------------- ------------------------ --------------------//

//Result and myPick's choice print

function result(yourOption) {
  
  let random = [Math.round(Math.random() * 2)];
  yourPick = yourOption;
  myPick = random;
  image(myPickImgs[random], 'my-img');

// ------------------------------------------------ //
let vs = yourPick - myPick;
// vs equals 2 || -1 print "I won";
// vs equals -2 || 1 print "You won";
// vs == 0 print "Draw";
vs == 0 ? score = "draw" : vs == 2 || vs == -1 ? score = "win" : score = "lose";

image(results[score], 'result-img');
}
