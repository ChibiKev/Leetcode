/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
  let letter = coordinates[0].charCodeAt(0) - 97;
  let number = coordinates[1];
  return (letter + +number) % 2 == 0;
};