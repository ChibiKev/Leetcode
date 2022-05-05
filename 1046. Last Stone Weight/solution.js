/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  let size = stones.length;
  while (size > 1){
    stones.sort(function(a, b){return a-b});
    let x = stones.pop(); 
    let y = stones.pop();
    if (x === y){
      size -= 2;
    }
    else{
      size -= 1; 
      stones.unshift(x - y); 
    }
  }
  return stones;
};