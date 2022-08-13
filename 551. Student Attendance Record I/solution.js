/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
  let A = 0;
  let L = 0;

  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (value == 'A'){
      A += 1;      
    }
    else if (value == 'L' && L < 3){
      if (index > 0 && s[index - 1] == 'L'){
        L += 1;
      }
      else{
        L = 1;        
      }
    }
  }

  return !(A >= 2) && !(L >= 3);
};