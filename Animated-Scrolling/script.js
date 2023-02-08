const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const bottomTrigger = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // returns DOMRect object--DOMRect describes size and position
    // of a rectangle-- providing information regarding size
    // of element and its position relative to the viewport
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < bottomTrigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
