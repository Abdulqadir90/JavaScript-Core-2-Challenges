let seconds = document.querySelector(".seconds");
let letterS = document.querySelector(".letter-s");
let letterL = document.querySelector(".letter-l");
let result = document.querySelector(".result");

function startGame() {
  letterS.innerHTML = 0;
  letterL.innerHTML = 0;
  result.innerHTML = "";
  document.addEventListener("keypress", keyBoardEvents);

  setTimeout(() => {
    document.removeEventListener("keypress", keyBoardEvents);
    // letterS.innerHTML > letterL.innerHTML
    //   ? (result.innerHTML = "S Winner")
    //   : letterL.innerHTML > letterS.innerHTML
    //   ? (result.innerHTML = "L winner")
    //   : (result.innerHTML = "Draw try again");
    if(Number(letterS.innerHTML) > Number(letterL.innerHTML)){
       result.innerHTML = "S Winner";
    } else if (Number(letterL.innerHTML) > Number(letterS.innerHTML)) {
       result.innerHTML = 'L Winner';
    } else {
       result.innerHTML = 'Draw, try again';
    }

    
  }, seconds.value * 1000);
}

function keyBoardEvents(e) {
  if (e.key === "s") {
    // On 'S' Pressed
    letterS.innerHTML++;
  } else if (e.key === "l") {
    letterL.innerHTML++; // On 'L' P ressed
  }
}
