/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
  let people = new Array(num_people).fill(0);
  let amount = 1;
  let current = 0;
  while(true){
    if (current == num_people){
      current = 0;
    }
    if (amount > candies){
      people[current] += candies;
      break;
    }
    else{
      people[current] += amount;
      candies -= amount;
      current += 1;
      amount += 1;
    }
  }
  return people;
};