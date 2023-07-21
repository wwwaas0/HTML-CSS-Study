const smartThingsURL =
  "https://api.smartthings.com/v1/devices/4fb408d3-0f1c-4d0a-9321-7e13b51020bd/status";

const token = "29cabe11-8a53-4cc7-8a36-013a3a046f56";

async function getSmartThingsData() {
  const result = await axios.get(smartThingsURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(result.data);
  const dust = result.data.components.main.dustSensor.dustLevel;
  const pm10 = document.querySelector("#pm10");
  pm10.innerText = dust.value + dust.unit;

  const pm2_5 = document.querySelector("#pm2_5");
  pm2_5.innerText = dust.value + dust.unit;

  const pm1_0 = document.querySelector("#pm1_0");
  pm1_0.innerText = dust.value + dust.unit;

  const TVOC = document.querySelector("#TVOC");
  TVOC.innerText = dust.value + dust.unit;

  const temperature = document.querySelector("#temperature");
  temperature.innerText = dust.value + dust.unit;

  const humidity = document.querySelector("#humidity");
  humidity.innerText = dust.value + dust.unit;

  const co2 = document.querySelector("#co2");
  co2.innerText = dust.value + dust.unit;

  const light = document.querySelector("#light");
  light.innerText = dust.value + dust.unit;

  const battery = document.querySelector("#battery");
  battery.innerText = dust.value + dust.unit;
}

getSmartThingsData();
