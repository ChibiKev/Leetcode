/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 var convertTime = function(current, correct) {
  let currentHours = parseInt(current.slice(0, 2));
  let currentMinutes = parseInt(current.slice(3, 5));
  let correctHours = parseInt(correct.slice(0, 2));
  let correctMinutes = parseInt(correct.slice(3, 5));

  let count = correctHours - currentHours;
  let difference = 0;
  if (currentMinutes < correctMinutes){
    difference = correctMinutes - currentMinutes;
  }
  else if (currentMinutes > correctMinutes){
    count -= 1;
    difference = 60 - currentMinutes + correctMinutes;
  }

  if (Math.floor(difference / 15) > 0){
    let amount = Math.floor(difference / 15);
    count += amount;
    difference -= amount * 15;
  }
  if (Math.floor(difference / 5) > 0){
    let amount = Math.floor(difference / 5);
    count += amount;
    difference -= amount * 5;
  }
  if (Math.floor(difference / 1) > 0){
    let amount = Math.floor(difference / 1);
    count += amount;
    difference -= amount * 1;
  }

  return count;
};