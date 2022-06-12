/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
  let years = new Array(101).fill(0);
  for (let index = 0; index < logs.length; index++){
    let log = logs[index];
    let birth = log[0];
    let death = log[1];
    years[birth - 1950] += 1;
    years[death - 1950] -= 1;
  }

  let count = 0;
  let maxCount = 0;
  let maxYear = 0;
  for (let index = 0; index < years.length; index++){
    let year = years[index];
    count += year;
    if (count > maxCount){
      maxCount = count;
      maxYear = index;
    }
  }

  return 1950 + maxYear;
};