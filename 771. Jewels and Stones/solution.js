/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let mySet = new Set();
  for (let index = 0; index < jewels.length; index++){
    let jewel = jewels[index];
    mySet.add(jewel);
  }

  let count = 0;
  for (let index = 0; index < stones.length; index++){
    let stone = stones[index];
    if (mySet.has(stone)){
      count += 1;
    }
  }

  return count;
};