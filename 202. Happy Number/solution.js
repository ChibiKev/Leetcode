/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let mySet = new Set();
  while (n != 1){
    if (!mySet.has(n)){
      mySet.add(n);
    }
    else{
      return false;
    }

    let total = 0;
    while (n > 0){
      total += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    n = total;
  }
  
  return true;
};