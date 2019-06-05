//
const openNav = document.getElementById("open__bar");
const closeNav = document.getElementById("close__bar");

openNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "200px";
  document.querySelector(".live__section").style.marginLeft = "200px";
  document.querySelector(".live__section").style.transition = "0.2s ease-in";
  //Hide hamburger bar
  if ((openNav.style.display = "block")) {
    openNav.style.display = "none";
  }
});

closeNav.addEventListener("click", () => {
  document.querySelector(".side__navbar").style.width = "0px";
  document.querySelector(".live__section").style.marginLeft = "0px";
  // Show hamburger bar
  if ((openNav.style.display = "none")) {
    openNav.style.display = "block";
  }
});

function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type === "text" && validateUser(input)) {
        nextFormSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextFormSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

//Name validation
function validateUser(user) {
  if (user.value.length < 6) {
    console.log("not good");
  } else {
    return true;
  }
}

//Email validation
function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    return true;
  } else {
    return false;
  }
}

//Adding and remving CSS classes
const nextFormSlide = (parent, nextForm) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
};

//Error function
function error(color) {
  document.querySelectorAll(".error").style.backgroundColor = "color";
}

animatedForm();
