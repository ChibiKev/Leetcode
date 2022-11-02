/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
 var hardestWorker = function(n, logs) {
  let employeeID = 0;
  let longestTask = 0;
  let start = 0;
  for (let index = 0; index < logs.length; index++){
    let log = logs[index];
    let task = log[1] - start;
    start = log[1];
    if (task > longestTask){
      longestTask = task;
      employeeID = log[0];
    }
    else if (task == longestTask){
      if (employeeID > log[0]){
        employeeID = log[0];
      }
    }
  }

  return employeeID;
};