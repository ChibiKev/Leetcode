/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
 var daysBetweenDates = function(date1, date2) {
  let year1 = parseInt(date1.slice(0,4));
  let month1 = parseInt(date1.slice(5,7));
  let day1 = parseInt(date1.slice(8,10));

  if (month1 < 3){
    month1 += 12;
    year1 -= 1;
  }

  let totalDays1 = 365 * year1 + Math.floor(year1 / 4) + Math.floor(year1 / 400) - Math.floor(year1 / 100) + day1 + Math.floor((153 * month1 + 8) / 5);

  let year2 = parseInt(date2.slice(0,4));
  let month2 = parseInt(date2.slice(5,7));
  let day2 = parseInt(date2.slice(8,10));

  if (month2 < 3){
    month2 += 12;
    year2 -= 1;
  }

  let totalDays2 = 365 * year2 + Math.floor(year2 / 4) + Math.floor(year2 / 400) - Math.floor(year2 / 100) + day2 + Math.floor((153 * month2 + 8) / 5);

  return Math.abs(totalDays1 - totalDays2);
};