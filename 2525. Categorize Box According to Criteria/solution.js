/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
  let bulky = (length >= 10000) || (width >= 10000) || (height >= 10000) || (mass >= 10000) || ((length * width * height) >= 1000000000);
  let heavy = mass >= 100;
  
  if (bulky && heavy){
    return "Both";
  }
  else if (!bulky && !heavy){
    return "Neither";
  }
  else if (bulky && !heavy){
    return "Bulky";
  }
  else if (!bulky && heavy){
    return "Heavy";
  }
  
  return undefined;
};