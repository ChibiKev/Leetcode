/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
  let trustedPeople = new Array(n).fill(0);
  for (let connection of trust){
    let person = connection[0];
    let trusted = connection[1];
    trustedPeople[person - 1] -= 1;
    trustedPeople[trusted - 1] += 1;
  }
  
  for (let index = 0; index < trustedPeople.length; index++){
    let people = trustedPeople[index];
    if (people === n - 1){
      return index + 1;
    }
  }

  return -1;
};