let hour;
let minute;
let second;
let total;
let stopedtime = 0;
let interval;
let blocks;
let stopButton = document.querySelector("#stop");
let timerContainer = document.querySelector(".timerContainer");
let timeNow;
let block;
let lasttime;
let color;
let sound = document.querySelector("audio");
let popUP = document.querySelector("p#value-alert");

creatSyle();
function getValues() {
  hour = parseInt(document.querySelector("#hour").value, 10) || 0;
  minute = parseInt(document.querySelector("#minute").value, 10) || 0;
  second = parseInt(document.querySelector("#seconde").value, 10) || 0;
  total = hour * 3600 + minute * 60 + second;
  timeNow = hour * 3600 + minute * 60 + second;
  sound.pause();

  if (total == 0) {
    popup();
  } else {
    counte();
    document.querySelector("#start").removeAttribute("onclick");
    document.querySelector(".pop-up").className += " hiden";
  }
}
function dispalyTime() {
  if (hour < 10) {
    document.querySelector("#hourTimer").innerHTML = "0" + hour + ":";
  } else if (hour >= 10) {
    document.querySelector("#hourTimer").innerHTML = hour + ":";
  }
  if (minute < 10) {
    document.querySelector("#minutesTimer").innerHTML = "0" + minute + ":";
  } else if (minute >= 10) {
    document.querySelector("#minutesTimer").innerHTML = minute + ":";
  }
  if (second < 10) {
    document.querySelector("#secondsTimer").innerHTML = "0" + second;
  } else if (second >= 10) {
    document.querySelector("#secondsTimer").innerHTML = second;
  }
}

function counte() {
  updateWidth();
  if (timeNow > 0) {
    if (stopButton.className != "stop") {
      timeNow--;
      if (second == 0 && minute == 0) {
        if (minute == 0 && hour > 0) {
          hour--;
          minute = 59;
          second = 60;
        }
      } else if (minute != 0 && second == 0) {
        minute--;
        second = 60;
      }

      for (x = 0; x <= lasttime - Math.floor((timeNow * 360) / total); x++) {
        block = document.querySelector(`.block${lasttime - x}`);
        block.style.backgroundColor = "rgb(0,0,0,0)";
      }
      if (timeNow >= total / 2 + total / 8) {
        for (z = 0; z < Math.floor((timeNow * 360) / total); z++) {
          block = document.querySelector(`.block${z}`);
          block.style.backgroundColor = "rgb(0,216,133)";
          document
            .querySelector(":root")
            .style.setProperty("--b-color", "rgb(0,216,133)");
        }
      } else if (
        timeNow < total / 2 + total / 8 &&
        timeNow > total / 2 - total / 8
      ) {
        for (z = 0; z < Math.floor((timeNow * 360) / total); z++) {
          block = document.querySelector(`.block${z}`);
          block.style.backgroundColor = "rgb(255, 196, 0)";
          document
            .querySelector(":root")
            .style.setProperty("--b-color", "rgb(255, 196, 0)");
        }
      } else if (timeNow < total / 2 - total / 8) {
        for (z = 0; z < Math.floor((timeNow * 360) / total); z++) {
          block = document.querySelector(`.block${z}`);
          block.style.backgroundColor = "rgb(255, 0, 64)";

          document
            .querySelector(":root")
            .style.setProperty("--b-color", "rgb(255, 0, 64)");
        }
      }

      second--;
      dispalyTime();
      setTimeout(counte, 1000);
    } else {
      stopedtime += 1;
      console.log(`time stoped ${stopedtime}`);
      setTimeout(counte, 1000);
    }
    lasttime = Math.floor((timeNow * 360) / total);
  } else if (timeNow == 0) {
    sound.play();
    document.querySelector("#stopSound").className = "soundActive";
    document.querySelector(".pop-up").className = "pop-up";
    setTimeout(() => {
      soundStop.className = "";
    }, 8000);
    addEventListener("keypress", (event) => {
      if (event.key == "Enter") {
        sound.pause();
        document.querySelector("#stopSound").className = "";
        sound.currentTime = 0;
      }
    });
    document.querySelector("#start").setAttribute("onclick", "getValues()");
  }
}

function toggel() {
  if (stopButton.className == "stop") {
    stopButton.className = "continue";
    stopButton.innerHTML = `<span class="material-symbols-outlined"> pause </span> pause`;
  } else if (stopButton.className != "stop") {
    stopButton.className = "stop";
    stopButton.innerHTML = `<span class="material-symbols-outlined">play_arrow </span> continue`;
  }
}

function creatSyle() {
  blocks = 359;
  let x = 0;
  while (x <= blocks) {
    timerContainer.innerHTML += `<div class="block${x} timing" style="--r:${x}deg ;--l:${
      x / 2
    }ms"></div>`;
    x++;
  }
}
function popup() {
  if (popUP.className == "active") {
    popUP.className = "";
  } else if (popUP.className == "") {
    popUP.className = "active";
  }
}
function reset() {
  location.reload();
}
//timerContainer.style.height = 17.2 * bodyHeight / 100;
let heightWidth;
function updateWidth() {
  heightWidth =
    document.querySelector(".block180").getBoundingClientRect().top -
    document.querySelector(".block0").getBoundingClientRect().top;
  document
    .querySelector(":root")
    .style.setProperty("--cercle", `${heightWidth - 2}px`);

  document
    .querySelector(":root")
    .style.setProperty("--container", `${heightWidth + 100}px`);
}
updateWidth();
let soundStop = document.querySelector("#stopSound");
document.querySelector("#stopSound").onclick = () => {
  soundStop.className = "";
  sound.pause();
  sound.currentTime = 0;
};
