// SHOW NAVBAR
document.getElementById("navbarToggler").onclick = function () {
  document.getElementById(this.dataset.target).classList.toggle("show");
  this.classList.toggle("show");
};

// SHOW DROPDOWN ON HOVER
document.querySelector(".has_menu a").onmouseover = function (ev) {
  document.querySelector(".has_menu ul").classList.add("show_dropdown");
};

// SHOW DROPDOWN ON MOUSELEAVE
document.querySelector(".has_menu a").onmouseout = function (ev) {
  document.querySelector(".has_menu ul").classList.remove("show_dropdown");
};
