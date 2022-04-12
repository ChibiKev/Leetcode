/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
  let smallestNumber = Infinity;
  let largestNumber = 0;
  for (let num of nums){
    if (smallestNumber > num){
      smallestNumber = num;
    }
    if (largestNumber < num){
      largestNumber = num;
    }
  }

  while (smallestNumber){
    let temp = largestNumber;
    largestNumber = smallestNumber;
    smallestNumber = temp % smallestNumber;
  }

  return largestNumber;
};