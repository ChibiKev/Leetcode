/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
  let current = 1;
  let result = [];
  for (let num of target){
    if (num != current){
      let difference = num - current;
      result = [...result, ...new Array(difference).fill(["Push", "Pop"]).flat()];
    }
    result.push("Push");
    current = num + 1;
  }
  return result;
};