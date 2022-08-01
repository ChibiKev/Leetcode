/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let num1End = num1.length - 1;
  let num2End = num2.length - 1;
  let carry = 0;
  let result = "";

  while (num1End >= 0 || num2End >= 0 || carry == 1){
    let sum = 0;
    if (num1End >= 0){
      sum += num1.charAt(num1End) - '0';
      num1End -= 1;
    }
    
    if (num2End >= 0){
      sum += num2.charAt(num2End) - '0';
      num2End -= 1;
    }
    
    sum += carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    result =  result + sum.toString();
  }

  return result.split("").reverse().join("");
};