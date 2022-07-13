/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let result = "";
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let carry = 0;
  while (aIndex > -1 || bIndex > -1){
    let total = carry;
    if (aIndex > -1){
      total += parseInt(a[aIndex]);
    }
    if (bIndex > -1){
      total += parseInt(b[bIndex]);
    }
    aIndex -= 1;
    bIndex -= 1;
    if (total > 1){
      carry = 1;
    }
    else{
      carry = 0;
    }
    result += (total % 2).toString();
  }

  if (carry != 0){
    result += carry.toString();
  }

  result = result.split("").reverse().join("");
  return result;
};