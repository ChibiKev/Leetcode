/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
  let A = new Array(8).fill(0);
  let B = new Array(8).fill(0);

  for (let index = 0; index < moves.length; index++){
    let row = moves[index][0];
    let column = moves[index][1];
    let player = A;
    if (index % 2 === 1){
      player = B;
    }
    player[row] += 1;
    player[column + 3] += 1;
    if (row === column){
      player[6] += 1;
    }
    if (row === 2 - column){
      player[7] += 1;
    }
  }

  for (let index = 0; index < 8; index++){
    if (A[index] === 3){
      return "A";
    }
    if (B[index] === 3){
      return "B";
    }
  }

  if (moves.length === 9){
    return "Draw";
  }

  return "Pending";
};