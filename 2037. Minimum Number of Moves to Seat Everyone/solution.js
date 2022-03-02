/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
  let sortedSeats = [...seats];
  sortedSeats.sort(function(a, b){return a-b});
  let sortedStudents = [...students];
  sortedStudents.sort(function(a, b){return a-b});
  
  let result = 0;
    
  for (let index = 0; index < seats.length; index++){
    let movements = Math.abs(sortedSeats[index] - sortedStudents[index]);
    result += movements;
  }

  return result;
};