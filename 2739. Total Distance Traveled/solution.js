/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  return (mainTank + Math.min(Math.floor((mainTank - 1) / 4), additionalTank)) * 10;
};