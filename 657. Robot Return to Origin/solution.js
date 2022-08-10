/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
  let up = 0;
  let left = 0;

  for (let index = 0; index < moves.length; index++){
    let move = moves[index];
    if (move == 'L'){
      left += 1;
    }
    else if (move == 'R'){
      left -= 1;
    }
    else if (move == 'U'){
      up += 1;
    }
    else if (move == 'D'){
      up -= 1;
    }
  }

  return up == 0 && left == 0;
};