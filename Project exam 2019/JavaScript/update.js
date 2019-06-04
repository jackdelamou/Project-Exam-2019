//Date we are counting down to
let countDwnDate = new Date("Jun 06, 2019 00:00:00").getTime();

// Countdown Function
let x = setInterval(function() {
  //Get today date
  let now = new Date().getTime();

  let distance = countDwnDate - now;

  //Calculate days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days +
    "d" +
    ". " +
    hours +
    "h" +
    ". " +
    minutes +
    "m" +
    ". " +
    seconds +
    "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "ITS A LAUNCH!!";
  }
}, 1000);

/****
 * CAROUSEL SLIDER
 */
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carousel__button--left");
const nextButton = document.querySelector(".carousel__button--right");
const navIndicator = document.querySelector(".carousel__nav");
const dots = Array.from(navIndicator.children);

//Get width of container
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//Function for moving slides left and right
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const showHideArrow = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is__hidden");
    nextButton.classList.remove("is__hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is__hidden");
    nextButton.classList.add("is__hidden");
  } else {
    prevButton.classList.remove("is__hidden");
    nextButton.classList.remove("is__hidden");
  }
};

//When I click right, move slides to the right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = navIndicator.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  //Functions for moving Slides
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  showHideArrow(slides, prevButton, nextButton, nextIndex);
});

//When I click left, move slides to the left
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = navIndicator.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  //Functions for moving slides
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  showHideArrow(slides, prevButton, nextButton, prevIndex);
});

//When I click the nav indicator, move to that slide
navIndicator.addEventListener("click", e => {
  //What indicator was clicked
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = navIndicator.querySelector(".current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  //Functions for moving slides
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  showHideArrow(slides, prevButton, nextButton, targetIndex);
});
