const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// verification so counter will not exceed
// length of circles array
next.addEventListener("click", () => {
  currentActive++;

  // if our counter(currentActive) increments higher
  // than the length of circles array, make our
  // counter become the length of circles array
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

//verification so counter will not fall below
// minimum which is 1
prev.addEventListener("click", () => {
  currentActive--;

  // if our counter goes lower than one,
  // set it to one
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// function to update the DOM--example
// to set active classes
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // sets styling of width property inside of progress class
  // we want width to change to roughly 33%, 66% and 99%--so
  // that it reaches and stops at each progress circle
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // if counter is at 1 there is no need to have a prev button
  // set so if counter(currentActive) = 1 disable prev button
  if (currentActive === 1) {
    prev.disabled = true;
    // if counter(currentActive) is at the end
    // disable next button
  } else if (currentActive === circles.length) {
    next.disabled = true;
    // otherwise if counter is in middle of list
    // keep both buttons enabled
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
