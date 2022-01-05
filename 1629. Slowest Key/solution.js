/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
  let maxValue = 0;
  let maxLetter = "";

  let lastTime = 0;
  for (let index in releaseTimes){
    let duration = releaseTimes[index] - lastTime;
    if (duration > maxValue){
      maxValue = duration;
      maxLetter = keysPressed[index];
    }
    if (duration === maxValue && keysPressed[index] > maxLetter){
      maxLetter = keysPressed[index];
    }
    lastTime = releaseTimes[index];
  }
  
  return maxLetter;
};