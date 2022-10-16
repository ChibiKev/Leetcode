/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
 var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let arriveAliceDays = parseInt(arriveAlice.slice(3,5));
  for (let month = 0; month < parseInt(arriveAlice.slice(0,2)) - 1; month++){
    arriveAliceDays += months[month];
  }

  let leaveAliceDays = parseInt(leaveAlice.slice(3,5));
  for (let month = 0; month < parseInt(leaveAlice.slice(0,2)) - 1; month++){
    leaveAliceDays += months[month];
  }

  let arriveBobDays = parseInt(arriveBob.slice(3,5));
  for (let month = 0; month < parseInt(arriveBob.slice(0,2)) - 1; month++){
    arriveBobDays += months[month];
  }

  let leaveBobDays = parseInt(leaveBob.slice(3,5));
  for (let month = 0; month < parseInt(leaveBob.slice(0,2)) - 1; month++){
    leaveBobDays += months[month];
  }

  if (leaveAliceDays < arriveBobDays || leaveBobDays < arriveAliceDays){
    return 0;
  }
  
  let result = 1;
  if (leaveAliceDays > leaveBobDays){
    result += leaveBobDays;
  }
  else {
    result += leaveAliceDays;
  }

  if (arriveBobDays < arriveAliceDays){
    result -= arriveAliceDays;
  }
  else {
    result -= arriveBobDays;
  }

  return result;
};