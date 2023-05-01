const options = ["rock", "paper", "scissor"];
let myImg = document.getElementById("my-img");
let yourImg = document.getElementById("your-img");
let yourPick;
let myPick;
let score;

//I changed the name of this function to make more sense.
function select(option) {
  yourPick = option;
  myPick = options[Math.floor(Math.random() * 3)]; //changed number from 2 to 3 because the value "scissor" wasn't working.

  if (
    (yourPick == "rock" && myPick == "paper") ||
    (yourPick == "paper" && myPick == "scissor") ||
    (yourPick == "scissor" && myPick == "rock")
  ) {
    score = "loose";
  } else if (
    (yourPick == "rock" && myPick == "scissor") ||
    (yourPick == "paper" && myPick == "rock") ||
    (yourPick == "scissor" && myPick == "paper")
  ) {
    score = "win";
  } else {
    score = "draw";
  }

  //added switch which for each myPick's value call the image() function to add the respective img.
  switch (myPick) {
    case "paper":
      image("paper.png", "my-img");
      break;
    case "scissor":
      image("scissor.png", "my-img");
      break;
    default:
      image("rock.png", "my-img");
  }
  //also added for yourPick and for score.
  switch (yourPick) {
    case "paper":
      image("paper.png", "your-img");
      break;
    case "scissor":
      image("scissor.png", "your-img");
      break;
    default:
      image("rock.png", "your-img");
      break;
  }

  switch (score) {
    case "win":
      image("win.png", "result-img");
      break;
    case "loose":
      image("loose.png", "result-img");
      break;
    case "draw":
      image("draw.png", "result-img");
      break;
  }
}

/*
Attributions to "previousimg" and "previousimg" variable deleted because of an error which
everytime the selectYourPick() function would call the function image() function to set up myPick's 
picture it would also unintentionally remove yourPick's picture.
*/

function image(src, div) {
  let adiv = document.getElementById(div);
  adiv.src = src;
  adiv.classList.add("imageFeatures");
}
/*
function image() changed so it doesn't create an element anymore, now it adds a "src" attribute to
the <img> element related to the respectives "yourPick" and my "myPick" boxes on the browser.
It was important because the previous version was printing myPick and yourPick images one over another,
it doesn't happen when you relate the images to different divs. And beyond that the element needed
alreay exists, so there's no need to create another.

Also, the image was being moved from the box when the browser was resized.
*/
