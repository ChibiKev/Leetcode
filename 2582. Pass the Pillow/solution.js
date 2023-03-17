/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  let totalTimeOnePass = n - 1;
  let totalPasses = Math.floor(time / totalTimeOnePass);
  let personIndex = time % totalTimeOnePass;
  if (totalPasses % 2 == 0){
    return personIndex + 1;
  }
  return n - personIndex;
};