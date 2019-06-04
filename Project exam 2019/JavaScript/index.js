const typewriter = function(textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.text = "";
  this.wordindex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//Type Method
typewriter.prototype.type = function() {
  //Current index of words
  const current = this.wordindex % this.words.length;
  //Get full text of current word
  const fullText = this.words[current];

  //Check if deleting
  if (this.isDeleting) {
    //Remove Char
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    //Add Char
    this.text = fullText.substring(0, this.text.length + 1);
  }

  //Inset text into element
  this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

  //Type speed
  let typespeed = 200;
  if (this.isDeleting) {
    typespeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.text === fullText) {
    //Make it pause
    typespeed = this.wait;
    //Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    //Move to next word
    this.wordindex++;
    //Pause before typing
    typespeed = 600;
  }

  setTimeout(() => this.type(), typespeed);
};

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);

//Init app

function init() {
  const textElement = document.querySelector(".typing");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");

  //Init Typewriter

  new typewriter(textElement, words, wait);
}
