let oWins = 0;
let xWins = 0;
let tie = 0;
let Xturn = "rgb(0, 255, 179)";
let Oturn = "rgb(241 42 69)";
let root = document.documentElement;
let turn = document.querySelector("#turn");

function selectBlock(who) {
  let block = document.querySelector(who);
  turn = document.querySelector("#turn");
  if (block.innerHTML == "") {
    block.innerHTML = turn.innerHTML;
    if (turn.innerHTML == "X") {
      block.style.backgroundColor = Xturn;
      root.style.setProperty("--curent-color", Xturn);
    } else {
      block.style.backgroundColor = Oturn;
      root.style.setProperty("--curent-color", Oturn);
    }
    checkWin();
    changeTurn();
  } else {
    console.log("this block was booked up");
  }
}
function changeTurn() {
  if (turn.innerHTML == "X") {
    turn.innerHTML = "O";
  } else {
    turn.innerHTML = "X";
  }
}
function checkWin() {
  if (
    (document.querySelector(`.block${1}`).innerHTML ==
      document.querySelector(`.block${2}`).innerHTML &&
      document.querySelector(`.block${3}`).innerHTML ==
        document.querySelector(`.block${1}`).innerHTML &&
      document.querySelector(`.block${1}`).innerHTML != "") ||
    (document.querySelector(`.block${4}`).innerHTML ==
      document.querySelector(`.block${5}`).innerHTML &&
      document.querySelector(`.block${5}`).innerHTML ==
        document.querySelector(`.block${6}`).innerHTML &&
      document.querySelector(`.block${6}`).innerHTML != "") ||
    (document.querySelector(`.block${7}`).innerHTML ==
      document.querySelector(`.block${8}`).innerHTML &&
      document.querySelector(`.block${8}`).innerHTML ==
        document.querySelector(`.block${9}`).innerHTML &&
      document.querySelector(`.block${9}`).innerHTML != "") ||
    (document.querySelector(`.block${1}`).innerHTML ==
      document.querySelector(`.block${5}`).innerHTML &&
      document.querySelector(`.block${5}`).innerHTML ==
        document.querySelector(`.block${9}`).innerHTML &&
      document.querySelector(`.block${9}`).innerHTML != "") ||
    (document.querySelector(`.block${3}`).innerHTML ==
      document.querySelector(`.block${5}`).innerHTML &&
      document.querySelector(`.block${5}`).innerHTML ==
        document.querySelector(`.block${7}`).innerHTML &&
      document.querySelector(`.block${7}`).innerHTML != "") ||
    (document.querySelector(`.block${1}`).innerHTML ==
      document.querySelector(`.block${4}`).innerHTML &&
      document.querySelector(`.block${4}`).innerHTML ==
        document.querySelector(`.block${7}`).innerHTML &&
      document.querySelector(`.block${7}`).innerHTML != "") ||
    (document.querySelector(`.block${2}`).innerHTML ==
      document.querySelector(`.block${5}`).innerHTML &&
      document.querySelector(`.block${5}`).innerHTML ==
        document.querySelector(`.block${8}`).innerHTML &&
      document.querySelector(`.block${8}`).innerHTML != "") ||
    (document.querySelector(`.block${3}`).innerHTML ==
      document.querySelector(`.block${6}`).innerHTML &&
      document.querySelector(`.block${6}`).innerHTML ==
        document.querySelector(`.block${9}`).innerHTML &&
      document.querySelector(`.block${9}`).innerHTML != "")
  ) {
    //X rab7
    if (turn.innerHTML == "X") {
      console.log("X win");
      document.querySelector(`#winner`).innerHTML = "X";
      xWins += 1;
      document.querySelector(".X").innerHTML = xWins;
    } //O rab7
    else {
      console.log("O win");
      document.querySelector(`#winner`).innerHTML = "O";
      oWins += 1;
      document.querySelector(".O").innerHTML = oWins;
    }
    endGame();
  } //ta3adol==>
  else if (
    document.querySelector(`.block${1}`).innerHTML != "" &&
    document.querySelector(`.block${2}`).innerHTML != "" &&
    document.querySelector(`.block${3}`).innerHTML != "" &&
    document.querySelector(`.block${4}`).innerHTML != "" &&
    document.querySelector(`.block${5}`).innerHTML != "" &&
    document.querySelector(`.block${6}`).innerHTML != "" &&
    document.querySelector(`.block${7}`).innerHTML != "" &&
    document.querySelector(`.block${8}`).innerHTML != "" &&
    document.querySelector(`.block${9}`).innerHTML != ""
  ) {
    endGame();
    resetGame();
    tie++;
    document.querySelector("#tie").innerHTML = tie;
  }
}
function endGame() {
  for (x = 1; x <= 9; x++) {
    document.querySelector(`.block${x}`).removeAttribute("onclick");
    console.log("block number " + x + " was blocked");
  }
  console.log("game end");
  resetGame();
}
function resetGame() {
  document.querySelector("#counter").innerHTML =
    "a new game will begin after 3s";

  setTimeout(() => {
    for (x = 1; x <= 9; x++) {
      document.querySelector(`.block${x}`).innerHTML = "";
      document
        .querySelector(`.block${x}`)
        .setAttribute("onclick", `selectBlock(".block${x}")`);
      document.querySelector(`.block${x}`).style.backgroundColor =
        "rgb(255, 255, 255)";
      console.log("block number " + x + " was opened");
    }
    document.querySelector("#counter").innerHTML = "";

    console.log("game started");
  }, 2500);
}
//reset with r button
document.addEventListener("keydown", (event) => {
  if (event.key == "r" || event.key == "R") {
    resetGame();
  }
});
//change turne
document.addEventListener("keydown", (event) => {
  if (
    document.querySelector(`.block${1}`).innerHTML != "" ||
    document.querySelector(`.block${2}`).innerHTML != "" ||
    document.querySelector(`.block${3}`).innerHTML != "" ||
    document.querySelector(`.block${4}`).innerHTML != "" ||
    document.querySelector(`.block${5}`).innerHTML != "" ||
    document.querySelector(`.block${6}`).innerHTML != "" ||
    document.querySelector(`.block${7}`).innerHTML != "" ||
    document.querySelector(`.block${8}`).innerHTML != "" ||
    document.querySelector(`.block${9}`).innerHTML != ""
  ) {
    if (event.key == "t" || event.key == "T") {
      endGame();
      resetGame();
      changeTurn();
    }
  }
  if (event.key == "t" || event.key == "T") {
    changeTurn();
  }
});
function popup() {
  document.querySelector("#HowToPlay").outerHTML = "";
}
