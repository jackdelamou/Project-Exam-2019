window.addEventListener("load", () => {
  let rocketName = document.querySelector(".rocket_name");
  let rocketWeight = document.querySelector(".rocket_weight");
  let rocketType = document.querySelector(".rocket_type");
  let launchYear = document.querySelector(".rocket_launch");

  const spacexAPI = "https://api.spacexdata.com/v3/launches/";

  //Fetch API
  fetch(spacexAPI)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data[76].rocket);

      const { rocket_name, rocket_type } = data[76].rocket;

      //Set DOM elements from API
      rocketName.textContent = rocket_name;
      rocketType.textContent = rocket_type;
      launchYear.textContent = data[76].launch_year;
      rocketWeight.textContent =
        data[76].rocket.second_stage.payloads[0].payload_mass_kg + " kg";
    });
});
