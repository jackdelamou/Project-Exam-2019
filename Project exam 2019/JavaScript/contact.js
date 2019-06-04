const inputField = document.getElementsByTagName("input");

function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //Check for validation
      if (input.type === "text" && validateName(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

function validateName(name) {
  if (name.value.length < 6) {
    error("red");
  } else {
    error("green");
    true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
