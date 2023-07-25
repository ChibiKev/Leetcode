/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  let count = 0;
  
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    let firstDigit = num;
    while (firstDigit >= 10){
      firstDigit = Math.floor(firstDigit / 10);
    }
    for (let index2 = index + 1; index2 < nums.length; index2++){
      let lastDigit = nums[index2] % 10;
      let currentFirstDigit = firstDigit;
      while (lastDigit != 0){
        let temp = currentFirstDigit % lastDigit;
        currentFirstDigit = lastDigit;
        lastDigit = temp;
      }
      count += (currentFirstDigit == 1);
    }
  }
  
  return count;
};