/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
  let red = [0,0,0,0,0,0,0,0,0,0];
  let green = [0,0,0,0,0,0,0,0,0,0];
  let blue = [0,0,0,0,0,0,0,0,0,0];

  let index = 0;
  while (index < rings.length){
    let letter = rings[index];
    let value = rings[index + 1];
    if (letter == 'R'){
      red[value] += 1;
    }
    else if (letter == 'G'){
      green[value] += 1;
    }
    else if (letter == 'B'){
      blue[value] += 1;
    }
    index += 2;
  }

  let count = 0;
  for (let index = 0; index < 10; index++){
    if (red[index] > 0 && green[index] > 0 && blue[index] > 0){
      count += 1;
    }
  }

  return count;
};