const options = ["rock", "paper", "scissor"];
let myImg = document.getElementById('my-img');
let yourImg = document.getElementById('your-img');
let yourPick;
let myPick;
let score;

function selectYourPick(option) {
  yourPick = option;
  myPick = options[Math.floor(Math.random() * 3)]; //changed number from 2 to 3 because the value "scissor" wasn't working.
  
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

  /*
  added console.log to check how the code is working,
  it can be seeing pressing ctrl+shift+i on the browser and clicking on console.
  */
   console.log('your: ' + yourPick + '\nmy: ' + myPick + '\nwinner: ' + score + '\n--------------'), score;

   //added switch which for each myPick's value call the image() function to add the respective img.
  
 switch(myPick) {
    case "paper": image('papel.png','my-img')
    break
    case "scissor": image('tesoura.png','my-img')
    break
    default : image('pedra.png','my-img')
  }
  return timeout
}

/*
Attributions to "previousimg" and "previousimg" variable deleted because of an error which
everytime the selectYourPick() function would call the function image() function to set up myPick's 
picture it would also unintentionally remove yourPick's picture.
*/

function image(src, div) {
  let adiv = document.getElementById(div);
  adiv.src = src;
  adiv.classList.add("yourImageFeatures");
}
/*
function image() changed so it doesn't create an element anymore, now it adds a "src" attribute to
the <img> element related to the respectives "yourPick" and my "myPick" boxes on the browser.
It was important because the previous version was printing myPick and yourPick images one over another,
it doesn't happen when you relate the images to different divs. And beyond that the element needed
alreay exists, so there's no need to create another.

Also, the image was being moved from the box when the browser was resized.
*/