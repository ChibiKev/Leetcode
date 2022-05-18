class Solution {
  public int numRookCaptures(char[][] board) {
    int[] rook = new int[2];

    for (int row = 0; row < 8; row++){
      for (int column = 0; column < 8; column++){
        if (board[row][column] == 'R'){
          rook[0] = row;
          rook[1] = column;
        }
      }
    }

    int count = 0;
    for (int row = rook[0] - 1; row > -1; row--){
      if (board[row][rook[1]] == 'p'){
        count += 1;
        break;
      }
      else if (board[row][rook[1]] == 'B'){
        break;
      }
    }
    for (int row = rook[0] + 1; row < 8; row++){
      if (board[row][rook[1]] == 'p'){
        count += 1;
        break;
      }
      else if (board[row][rook[1]] == 'B'){
        break;
      }
    }
    for (int column = rook[1] - 1; column > -1; column--){
      if (board[rook[0]][column] == 'p'){
        count += 1;
        break;
      }
      else if (board[rook[0]][column] == 'B'){
        break;
      }
    }
      for (int column = rook[1] + 1; column < 8; column++){
      if (board[rook[0]][column] == 'p'){
        count += 1;
        break;
      }
      else if (board[rook[0]][column] == 'B'){
        break;
      }
    }

    return count;
  }
}