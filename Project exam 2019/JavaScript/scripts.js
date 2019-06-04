const openNav = document.getElementById("open__bar");
const closeNav = document.getElementById("close__bar");

openNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "200px";
  document.querySelector(".body-section").style.marginLeft = "200px";
  document.querySelector(".body-section").style.transition = ".2s ease-in";
  //Hide hamburger bar
  if ((openNav.style.display = "block")) {
    openNav.style.display = "none";
  }
});

closeNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "0px";
  document.querySelector(".body-section").style.marginLeft = "0px";
  document.querySelector(".body-section").style.transition = ".2s ease-in";
  // Show hamburger bar
  if ((openNav.style.display = "none")) {
    openNav.style.display = "block";
  }
});
