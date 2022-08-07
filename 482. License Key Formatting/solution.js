/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
  let nonformatted = "";
  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (value != "-"){
      nonformatted += value;
    }
  }

  let amount = nonformatted.length % k;
  if (nonformatted.length % k == 0){
    amount = k;
  }

  let result = nonformatted.slice(0, amount);

  while (amount < nonformatted.length){
    result += "-" + nonformatted.slice(amount, amount + k);
    amount += k;
  }

  return result.toUpperCase();
};