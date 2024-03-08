function convertTemperature() {
  const temperatureValue = parseFloat(
    document.getElementById("temp_value").value
  );
  const temperatureUnit = document.getElementById("temp_unit").value;
  const temperatureConvertTo = document.getElementById("temp_convert_to").value;
  const resultElement = document.getElementById("result");
  let convertedValue;
  switch (temperatureConvertTo) {
    case "celsius":
      convertedValue =
        temperatureUnit === "celsius"
          ? temperatureValue
          : temperatureUnit === "fahrenheit"
          ? (temperatureValue - 32) / 1.8
          : temperatureValue - 273.15;
      break;
    case "fahrenheit":
      convertedValue =
        temperatureUnit === "fahrenheit"
          ? temperatureValue
          : temperatureUnit === "celsius"
          ? temperatureValue * 1.8 + 32
          : (temperatureValue - 273.15) * 1.8 + 32;
      break;
    case "kelvin":
      convertedValue =
        temperatureUnit === "kelvin"
          ? temperatureValue
          : temperatureUnit === "celsius"
          ? temperatureValue + 273.15
          : (temperatureValue - 32) / 1.8 + 273.15;
      break;
    default:
      break;
  }
  const resultUnit =
    temperatureConvertTo === "kelvin"
      ? "K"
      : `°${temperatureConvertTo.toUpperCase()}`;
  resultElement.textContent = `${convertedValue.toFixed(2)}${resultUnit}`;
}
const container = document.createElement("div");
container.classList.add("container");
const titleDiv = document.createElement("div");
titleDiv.classList.add("title");
const titleHeading = document.createElement("h1");
titleHeading.innerHTML =
  '<i class="fas fa-thermometer-half icon"></i>Temperature Converter';
const titleParagraph = document.createElement("p");
titleParagraph.textContent =
  "A JavaScript app for converting temperatures between Celsius, Fahrenheit, and Kelvin scales.";
titleDiv.appendChild(titleHeading);
titleDiv.appendChild(titleParagraph);
const appDiv = document.createElement("div");
appDiv.id = "app";
const tempConvertToDiv = document.createElement("div");
tempConvertToDiv.classList.add("temp_convert_to");
const tempConvertToLabel = document.createElement("label");
tempConvertToLabel.setAttribute("for", "temp_convert_to");
tempConvertToLabel.textContent = "Temperature Convert To :";
const tempConvertToSelect = document.createElement("select");
tempConvertToSelect.id = "temp_convert_to";
const tempConvertToOptions = ["Celsius", "Fahrenheit", "Kelvin"];
tempConvertToOptions.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText.toLowerCase();
  option.textContent = optionText;
  tempConvertToSelect.appendChild(option);
});
tempConvertToDiv.appendChild(tempConvertToLabel);
tempConvertToDiv.appendChild(tempConvertToSelect);
const tempValueSection = document.createElement("section");
const tempValueLabel = document.createElement("label");
tempValueLabel.setAttribute("for", "temp_value");
tempValueLabel.textContent = "Temperature Value :";
const tempValueInput = document.createElement("input");
tempValueInput.type = "number";
tempValueInput.name = "temperature value";
tempValueInput.id = "temp_value";
tempValueSection.appendChild(tempValueLabel);
tempValueSection.appendChild(tempValueInput);
const tempUnitDiv = document.createElement("div");
tempUnitDiv.classList.add("temp-convert");
const tempUnitLabel = document.createElement("label");
tempUnitLabel.setAttribute("for", "temp_unit");
tempUnitLabel.textContent = "Temperature Unit :";
const tempUnitSelect = document.createElement("select");
tempUnitSelect.name = "temperature unit";
tempUnitSelect.id = "temp_unit";
const tempUnitOptions = ["Celsius", "Fahrenheit", "Kelvin"];
tempUnitOptions.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText.toLowerCase();
  option.textContent = optionText;
  tempUnitSelect.appendChild(option);
});
tempUnitDiv.appendChild(tempUnitLabel);
tempUnitDiv.appendChild(tempUnitSelect);
const tempResultDiv = document.createElement("div");
tempResultDiv.classList.add("temp-result");
const tempResultHeading = document.createElement("h2");
tempResultHeading.innerHTML =
  '<i class="fas fa-temperature-low icon"></i><span id="result"></span>';
tempResultDiv.appendChild(tempResultHeading);
container.appendChild(titleDiv);
container.appendChild(appDiv);
container.appendChild(tempConvertToDiv);
container.appendChild(tempValueSection);
container.appendChild(tempUnitDiv);
container.appendChild(tempResultDiv);
document.body.appendChild(container);
document.addEventListener("DOMContentLoaded", function () {
  const tempValueInput = document.getElementById("temp_value");
  const tempUnitSelect = document.getElementById("temp_unit");
  const tempConvertToSelect = document.getElementById("temp_convert_to");
  tempValueInput.addEventListener("input", convertTemperature);
  tempUnitSelect.addEventListener("change", convertTemperature);
  tempConvertToSelect.addEventListener("change", convertTemperature);
});
