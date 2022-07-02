/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
  let myList = new Array(10).fill(0);
  for (let index = 0; index < num.length; index++){
    let value = parseInt(num[index]);
    myList[value] += 1;
  }

  for (let index = 0; index < num.length; index++){
    let value = parseInt(num[index]);
    if (myList[index] != value){
      return false;
    }
  }

  return true;
};