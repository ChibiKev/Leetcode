/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 var maxCount = function(m, n, ops) {
  if (ops.length === 0){
    return m * n;
  }

  x = [];
  y = [];
  
  for (let index = 0; index < ops.length; index++){
    x.push(ops[index][0]);
    y.push(ops[index][1]);
  }

  smallestX = x[0];
  smallestY = y[0];
  for (let value of x){
    if (value < smallestX){
      smallestX = value;
    }
  }

  for (let value of y){
    if (value < smallestY){
      smallestY = value;
    }
  }

  return smallestX * smallestY;
};