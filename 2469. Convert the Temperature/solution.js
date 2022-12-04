/**
 * @param {number} celsius
 * @return {number[]}
 */
 var convertTemperature = function(celsius) {
  let fahrenheit = celsius * 1.8 + 32.00;
  let kelvin = celsius + 273.15;
  return [kelvin, fahrenheit];
};