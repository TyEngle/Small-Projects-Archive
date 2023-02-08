const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let loadCounter = 0;

// interval of 30 milliseconds
let interval = setInterval(blurringEffect, 30);

function blurringEffect() {
  loadCounter++;

  if (loadCounter > 99) {
    clearInterval(interval);
  }
  // changes inner text of loadtext(which has saved value of
  // element with loading-text class)
  // in our case changes "0%"
  loadText.innerText = `${loadCounter}%`;
  // since we want opacity to disperce, set
  // out min as 1 and out max as 0
  loadText.style.opacity = scale(loadCounter, 0, 100, 1, 0);

  background.style.filter = `blur(${scale(loadCounter, 0, 100, 30, 0)}px)`;
}

// great function to help scale values up or down
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
