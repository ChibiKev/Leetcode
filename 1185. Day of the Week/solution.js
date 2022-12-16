/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
 var dayOfTheWeek = function(day, month, year) {
  let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  let total = (Math.floor((year - 1) / 4) * 366) + (((year - 1) - Math.floor((year - 1) / 4)) * 365) + day;
  
  if ((year % 4 == 0) && (year != 2100)){
    months[1] += 1;
  }
  
  for (let index = 0; index < month - 1; index++){
    total += months[index];
  }

  return weeks[(total - 1) % 7];
};