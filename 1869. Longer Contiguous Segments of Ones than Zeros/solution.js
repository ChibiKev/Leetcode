/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
  let currentZeros = 0;
  let maxZeros = 0;
  let currentOnes = 0;
  let maxOnes = 0;

  for (let index = 0; index < s.length; index++){
    let number = s[index];
    if (number == '0'){
      currentZeros += 1;
      currentOnes = 0;
    }
    else if (number == '1'){
      currentOnes += 1;
      currentZeros = 0;
    }

    if (maxZeros < currentZeros){
      maxZeros = currentZeros;
    }

    if (maxOnes < currentOnes){
      maxOnes = currentOnes;
    }
  }

  return maxOnes > maxZeros;
};