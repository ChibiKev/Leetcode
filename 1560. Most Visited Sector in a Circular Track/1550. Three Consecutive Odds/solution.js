/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
 var mostVisited = function(n, rounds) {
  let result = [];
  if (rounds[0] === rounds[rounds.length - 1]){
    return [rounds[0]];
  }
  else if (rounds[0] < rounds[rounds.length - 1]){
    for (let number = rounds[0]; number < rounds[rounds.length - 1] + 1; number++){
      result.push(number);
    }
  }
  else{
    for (let number = 1; number < rounds[rounds.length - 1] + 1; number++){
      result.push(number);
    }
    for (let number = rounds[0]; number < n + 1; number++){
      result.push(number);
    }
  }
  return result;
};