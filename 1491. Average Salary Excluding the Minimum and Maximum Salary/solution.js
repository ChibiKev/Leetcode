/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
  let minimum = salary[0];
  let maximum = salary[0];
  let total = 0.00;
  for (let employee of salary){
     total += employee;
    if (employee > maximum){
      maximum = employee;
    }
    if (employee < minimum){
      minimum = employee;
    }
  }
  
  total -= minimum + maximum;
  return total / (salary.length - 2);
};