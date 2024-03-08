const elements = {
  temperatureValue: document.getElementById("temp_value"),
  temperatureUnit: document.getElementById("temp_unit"),
  temperatureConvertTo: document.getElementById("temp_convert_to"),
  result: document.getElementById("result"),
};
function convertTemperature() {
  const { value } = elements.temperatureValue;

  if (value !== "") {
    const temperatureValue = parseFloat(value);
    const convertTo = elements.temperatureConvertTo.value;
    const unit = elements.temperatureUnit.value;

    let convertedValue;

    switch (convertTo) {
      case "celsius":
        convertedValue =
          unit === "celsius"
            ? temperatureValue
            : unit === "fahrenheit"
            ? (temperatureValue - 32) / 1.8
            : temperatureValue - 273.15;
        break;
      case "fahrenheit":
        convertedValue =
          unit === "fahrenheit"
            ? temperatureValue
            : unit === "celsius"
            ? temperatureValue * 1.8 + 32
            : (temperatureValue - 273.15) * 1.8 + 32;
        break;
      case "kelvin":
        convertedValue =
          unit === "kelvin"
            ? temperatureValue
            : unit === "celsius"
            ? temperatureValue + 273.15
            : (temperatureValue - 32) / 1.8 + 273.15;
        break;
      default:
        break;
    }

    const resultUnit =
      convertTo === "kelvin" ? "K" : `°${convertTo.toUpperCase()}`;
    elements.result.innerHTML = `${convertedValue.toFixed(2)}${resultUnit}`;
  }
}
elements.temperatureValue.addEventListener("input", convertTemperature);
elements.temperatureUnit.addEventListener("change", convertTemperature);
elements.temperatureConvertTo.addEventListener("change", convertTemperature);
