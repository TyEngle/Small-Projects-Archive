const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// event to add active class to element with id of open
open.addEventListener("click", () => container.classList.add("show-nav"));

// event to remove active class from element with id of close
close.addEventListener("click", () => container.classList.remove("show-nav"));
