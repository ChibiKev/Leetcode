/**
 * @param {character[][]} board
 * @return {number}
 */
 var numRookCaptures = function(board) {
  let rook = [];

  for (let row = 0; row < 8; row++){
    for (let column = 0; column < 8; column++){
      if (board[row][column] === 'R'){
        rook = [row, column];
      }
    }
  }

  let count = 0;
  for (let row = rook[0] - 1; row > -1; row--){
    if (board[row][rook[1]] === 'p'){
      count += 1;
      break;
    }
    else if (board[row][rook[1]] === 'B'){
      break;
    }
  }
  for (let row = rook[0] + 1; row < 8; row++){
    if (board[row][rook[1]] === 'p'){
      count += 1;
      break;
    }
    else if (board[row][rook[1]] === 'B'){
      break;
    }
  }
  for (let column = rook[1] - 1; column > -1; column--){
    if (board[rook[0]][column] === 'p'){
      count += 1;
      break;
    }
    else if (board[rook[0]][column] === 'B'){
      break;
    }
  }
    for (let column = rook[1] + 1; column < 8; column++){
    if (board[rook[0]][column] === 'p'){
      count += 1;
      break;
    }
    else if (board[rook[0]][column] === 'B'){
      break;
    }
  }

  return count;
};