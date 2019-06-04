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
