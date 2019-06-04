const openNav = document.getElementById("open__bar");
const closeNav = document.getElementById("close__bar");

openNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "200px";
  document.querySelector(".body-section").style.marginLeft = "200px";
  //Hide hamburger bar
  if ((openNav.style.display = "block")) {
    openNav.style.display = "none";
  }
});

closeNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "0px";
  document.querySelector(".body-section").style.marginLeft = "0px";
  // Show hamburger bar
  if ((openNav.style.display = "none")) {
    openNav.style.display = "block";
  }
});
