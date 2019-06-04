window.addEventListener("load", () => {
  let rocketName = document.querySelector(".rocket_name");
  let rocketweight = document.querySelector(".rocket_weight");
  let rocketType = document.querySelector(".rocket_type");
  let launchYear = document.querySelector(".rocket_launch");

  const spacexAPI = "https://api.spacexdata.com/v3/launches/latest";

  //Fetch API
  fetch(spacexAPI)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      const { rocket_name, rocket_type } = data.rocket;

      //Set DOM elements from API
      rocketName.textContent = rocket_name;
      rocketType.textContent = rocket_type;
      launchYear.textContent = data.launch_year;
      rocketweight.textContent =
        data.rocket.second_stage.payloads[0].payload_mass_kg + " kg";
    });
});
