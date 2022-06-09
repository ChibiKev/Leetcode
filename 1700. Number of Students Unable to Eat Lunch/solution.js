/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
  let count = [0, 0];
  for (let index = 0; index < students.length; index++){
    let student = students[index];
    count[student] += 1;
  }

  let index = 0;
  while (index < students.length && count[sandwiches[index]] != 0){
    count[sandwiches[index]] -= 1;
    index += 1;
  }

  return students.length - index;
};