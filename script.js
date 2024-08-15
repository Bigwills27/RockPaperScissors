const youPick = document.querySelector(".you-pick");
const yourPick = document.querySelector(".your-pick");
const housePick = document.querySelector(".house-pick>.select");
const housePickImg = document.querySelector(
  ".house-pick>.select>.option>.house-pick-img"
);
const paper = document.querySelector(".select-paper");
const rock = document.querySelector(".select-rock");
const scissors = document.querySelector(".select-scissors");
const choice = document.querySelector(".choice");
const choiceImg = document.querySelector(".choice>.option>img");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const resultPick = document.querySelector(".result-pick");
const yourFate = document.querySelector(".your-fate");
const playAgain = document.querySelector(".play-again");
const rulesBtn = document.querySelector(".rules");
const ruleSec = document.querySelector(".rules-sec");
const closeX = document.querySelectorAll(".close-icon");
const abtRule = document.querySelector(".abt-rule");

function isPaper() {
  housePick.classList.remove("house-select");
  housePick.classList.add("select-paper");
  housePick.classList.remove("select-rock");
  housePick.classList.remove("select-scissors");
  housePickImg.src = "./images/icon-paper.svg";
}

function isRock() {
  housePick.classList.remove("house-select");
  housePick.classList.add("select-rock");
  housePick.classList.remove("select-paper");
  housePick.classList.remove("select-scissors");
  housePickImg.src = "./images/icon-rock.svg";
}

function isScissors() {
  housePick.classList.remove("house-select");
  housePick.classList.add("select-scissors");
  housePick.classList.remove("select-rock");
  housePick.classList.remove("select-paper");
  housePickImg.src = "./images/icon-scissors.svg";
}

function isNothing() {
  housePick.classList.add("house-select");
  housePick.classList.remove("select-rock");
  housePick.classList.remove("select-paper");
  housePick.classList.remove("select-scissors");
  housePickImg.src = "";
}

function checkSelections() {
  // if its rock scissors
  if (
    choice.classList.contains("select-rock") &&
    housePick.classList.contains("select-scissors")
  ) {
    score.textContent = parseInt(score.textContent) + 1;
    yourFate.textContent = "You Win";
  }

  // if its rock paper
  if (
    choice.classList.contains("select-rock") &&
    housePick.classList.contains("select-paper")
  ) {
    score.textContent = parseInt(score.textContent) - 1;
    yourFate.textContent = "You Lose";
  }

  // if its rock rock
  if (
    choice.classList.contains("select-rock") &&
    housePick.classList.contains("select-rock")
  ) {
    score.textContent = parseInt(score.textContent) + 0;
    yourFate.textContent = "Draw 🤜🏽🤛🏽";
  }

  // if its scissors paper
  if (
    choice.classList.contains("select-scissors") &&
    housePick.classList.contains("select-paper")
  ) {
    score.textContent = parseInt(score.textContent) + 1;
    yourFate.textContent = "You Win";
  }

  // if its scissors rock
  if (
    choice.classList.contains("select-scissors") &&
    housePick.classList.contains("select-rock")
  ) {
    score.textContent = parseInt(score.textContent) - 1;
    yourFate.textContent = "You Lose";
  }

  // if its scissors scissors
  if (
    choice.classList.contains("select-scissors") &&
    housePick.classList.contains("select-scissors")
  ) {
    score.textContent = parseInt(score.textContent) + 0;
    yourFate.textContent = "Draw 🤜🏽🤛🏽";
  }

  // if its paper scissors
  if (
    choice.classList.contains("select-paper") &&
    housePick.classList.contains("select-scissors")
  ) {
    score.textContent = parseInt(score.textContent) - 1;
    yourFate.textContent = "You Lose";
  }

  // if its paper rock
  if (
    choice.classList.contains("select-paper") &&
    housePick.classList.contains("select-rock")
  ) {
    score.textContent = parseInt(score.textContent) + 1;
    yourFate.textContent = "You Win";
  }

  // if its paper paper
  if (
    choice.classList.contains("select-paper") &&
    housePick.classList.contains("select-paper")
  ) {
    score.textContent = parseInt(score.textContent) + 0;
    yourFate.textContent = "Draw 🤜🏽🤛🏽";
  }
}

const functions = [isRock, isPaper, isScissors];

paper.addEventListener("click", () => {
  youPick.style.display = "none";
  yourPick.style.display = "flex";
  setTimeout(() => {
    result.style.display = "flex";
  }, 1500);
  choice.classList.remove("select-rock");
  choice.classList.remove("select-scissors");
  choice.classList.add("select-paper");
  choiceImg.src = "./images/icon-paper.svg";

  if (yourPick.style.display == "flex") {
    // const randomIndex = Math.floor(Math.random() * functions.length);
    // const randomFunction = functions[randomIndex];
    // randomFunction();

    let i = parseInt(Math.random() * functions.length);

    setTimeout(() => {
      functions[i]();
      housePick.style.animation = "popUp 1s ease-in-out";
    }, 900);

    setTimeout(() => {
      housePick.style.animation = "popUp 1s ease-in-out";
    }, 1000);
  }
});

rock.addEventListener("click", () => {
  youPick.style.display = "none";
  yourPick.style.display = "flex";
  setTimeout(() => {
    result.style.display = "flex";
  }, 1500);
  choice.classList.remove("select-paper");
  choice.classList.remove("select-scissors");
  choice.classList.add("select-rock");
  choiceImg.src = "./images/icon-rock.svg";

  if (yourPick.style.display == "flex") {
    let i = parseInt(Math.random() * functions.length);
    setTimeout(() => {
      functions[i]();
      housePick.style.animation = "popUp 1s ease-in-out";
    }, 900);

    setTimeout(() => {
      housePick.style.animation = "popUp 1s ease-in-out";
    }, 1000);
  }
});

scissors.addEventListener("click", () => {
  youPick.style.display = "none";
  yourPick.style.display = "flex";
  setTimeout(() => {
    result.style.display = "flex";
  }, 1500);
  choice.classList.remove("select-paper");
  choice.classList.remove("select-rock");
  choice.classList.add("select-scissors");
  choiceImg.src = "./images/icon-scissors.svg";

  if (yourPick.style.display == "flex") {
    let i = parseInt(Math.random() * functions.length);
    setTimeout(() => {
      functions[i]();
    }, 900);

    setTimeout(() => {
      housePick.style.animation = "popUp 1s ease-in-out";
    }, 1000);
  }
});

// Calculating scores
rock.addEventListener("click", () => {
  setTimeout(() => {
    checkSelections();
  }, 1000);
});

scissors.addEventListener("click", () => {
  setTimeout(() => {
    checkSelections();
  }, 1000);
});

paper.addEventListener("click", () => {
  setTimeout(() => {
    checkSelections();
  }, 1000);
});

// play again btn
playAgain.addEventListener("click", () => {
  youPick.style.display = "flex";
  yourPick.style.display = "none";
  result.style.display = "none";
  isNothing();
});

// Mobile pop out the rules
rulesBtn.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 650px)").matches) {
    ruleSec.style.transform = "translate3d(0, 0, 0)";
    ruleSec.style.animation = "popUp 1s ease-in-out 1s";
    abtRule.classList.remove("rules-header");
  }
});

closeX.forEach((closeE) => {
  closeE.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 650px)").matches) {
      ruleSec.style.animation = "curveMe 2.1s ease-in-out";
      ruleSec.style.transform = "translate3d(0, 1200px, 0)";
    }
  });
});

// desktop rule pop out modal form
const main = document.querySelector("main");
const body = document.querySelector("body");
const style = document.createElement("style");

rulesBtn.addEventListener("click", () => {
  if (window.matchMedia("(min-width: 650px)").matches) {
    ruleSec.style.transform = "translate(-50%, -50%)";
    abtRule.classList.add("rules-header");
    style.innerHTML = `main::after {
    content: "";
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.505);
    /* border: 2px solid red; */
}`;
    body.prepend(style);
  }
});

closeX.forEach((closeE) => {
  closeE.addEventListener("click", () => {
    let options = [500, -500];
    let j = parseInt(Math.random() * options.length);
    if (window.matchMedia("(min-width: 650px)").matches) {
      ruleSec.style.transform = `translate(${options[j]}%, -50%)`;
      style.remove();
    }
  });
});

window.addEventListener("resize", function () {
  // if screen resize to mobile while rules is displayed
  if (
    window.matchMedia("(max-width: 649px)").matches &&
    ruleSec.style.transform == "translate(-50%, -50%)"
  ) {
    ruleSec.style.transform = "translate3d(0px, 0px, 0px)";
    ruleSec.style.animation = "popUp 1s ease-in-out 1s";
    abtRule.classList.remove("rules-header");
  }

  // if screen resize to desktop while rules is displayed
  if (
    window.matchMedia("(min-width: 650px)").matches &&
    ruleSec.style.transform == "translate3d(0px, 0px, 0px)"
  ) {
    ruleSec.style.transform = "translate(-50%, -50%)";
    abtRule.classList.add("rules-header");
    style.innerHTML = `main::after {
    content: "";
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.505);
    /* border: 2px solid red; */
}`;
    body.prepend(style);
  } else {
    style.remove();
  }
});

// let initialy = 1;
// window.addEventListener("click", () => {
//   prompt("Have you paid my money", ca);
//   let curry = initialy - 0.2;
//   initialy = curry;
//   Main.style.opacity = `${curry}`;
// });

window.addEventListener("load", () => {
  if (window.matchMedia("(min-width: 650px)").matches) {
    const yourSide = document.querySelector(".your-side");
    yourSide.after(result);
  } else {
    resultPick.after(result);
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 650px)").matches) {
    const yourSide = document.querySelector(".your-side");
    yourSide.after(result);
  } else {
    resultPick.after(result);
  }
});
