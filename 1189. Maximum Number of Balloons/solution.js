/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;

  for (let index = 0; index < text.length; index++){
    let letter = text[index];
    if (letter == 'b'){
      b += 1;
    }
    else if (letter == 'a'){
      a += 1;
    }
    else if (letter == 'l'){
      l += 1;
    }
    else if (letter == 'o'){
      o += 1;
    }
    else if (letter == 'n'){
      n += 1;
    }
  }

  let minimum = b;
  if (a < minimum){
    minimum = a;
  }
  if (Math.floor(l / 2) < minimum){
   minimum = Math.floor(l / 2);   
  }
  if (Math.floor(o / 2) < minimum){
    minimum = Math.floor(o / 2);    
  }
  if (n < minimum){
    minimum = n;
  }

  return minimum;
};