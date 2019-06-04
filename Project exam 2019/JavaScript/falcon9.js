//When page loads up
window.addEventListener("load", () => {
  let rocketName = document.querySelector(".rocket_name");
  let rocketWeight = document.querySelector(".rocket_weight");
  let rocketType = document.querySelector(".rocket_type");
  let launchdate = document.querySelector(".rocket_launch");

  // SpaceX API
  const spacexAPI = "https://api.spacexdata.com/v3/launches/";

  //Fetch API
  fetch(spacexAPI)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data[21].rocket.second_stage.payloads[0].payload_mass_kg);

      const { rocket_name, rocket_type } = data[77].rocket;

      //Set DOM element from API
      rocketName.textContent = rocket_name;
      rocketType.textContent = rocket_type;
      launchdate.textContent = data[77].launch_year;
      rocketWeight.textContent =
        data[21].rocket.second_stage.payloads[0].payload_mass_kg + " kg";
    });
});

const playButton = document.getElementById("play-btn");
console.log(playButton);
const falconVideo = document.querySelector(".playbtn-video iframe");
console.log(falconVideo);
const heroImage = document.querySelector(".hero-image");

playButton.addEventListener("click", () => {
  if ((falconVideo.style.display = "none")) {
    falconVideo.style.display = "block";
    heroImage.style.display = "none";
  }
});

document.body.addEventListener("click", () => {
  if ((falconVideo.style.display = "block")) {
    falconVideo.style.display = "none";
    heroImage.style.display = "block";
  }
});
