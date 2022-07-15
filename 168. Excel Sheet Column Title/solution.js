/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  result = "";
  while (columnNumber > 0){
    result += letters[(columnNumber - 1) % 26];
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  result = result.split("").reverse().join("");
  return result;
};