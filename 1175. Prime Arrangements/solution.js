/**
 * @param {number} n
 * @return {number}
 */
 var numPrimeArrangements = function(n) {
  let primeNumbers = new Array(n + 1).fill(true);

  for (let value = 2; value < Math.floor(Math.sqrt(n)) + 1; value++){
    if (primeNumbers[value]){
      for (let composite = value * value; composite < n + 1; composite += value){
        primeNumbers[composite] = false;
      }
    }
  }

  let count = 0;
  for (let index = 2; index < primeNumbers.length; index++){
    count += primeNumbers[index];
  }

  let countFactorial = BigInt(count);
  if (countFactorial == 0 || countFactorial == 1){
    countFactorial = BigInt(1);
  }
  else {
    for (let index = count - 1; index >= 1; index--){
      countFactorial *= BigInt(index);
    }
  }

  let nCountFactorial = BigInt(n - count);
  if (nCountFactorial == 0 || nCountFactorial == 1){
    nCountFactorial = BigInt(1);
  }
  else {
    for (let index = n - count - 1; index >= 1; index--){
      nCountFactorial *= BigInt(index);
    }
  }

  return (countFactorial * nCountFactorial) % BigInt(10**9 + 7);
};