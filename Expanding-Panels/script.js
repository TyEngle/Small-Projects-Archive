// creates a node list of panels
const panels = document.querySelectorAll(".panel");
// when a panel is clicked a class of active
// will be added to that panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  // function to loop through and remove
  // active class from any non-active panel
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
