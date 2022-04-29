class Solution {
  public String tictactoe(int[][] moves) {
    int[] A = new int[8];
    Arrays.fill(A, 0);
    int[] B = new int[8];
    Arrays.fill(B, 0);

    for (int index = 0; index < moves.length; index++){
      int row = moves[index][0];
      int column = moves[index][1];
      int[] player = (index % 2 == 0) ? A : B;
      player[row] += 1;
      player[column + 3] += 1;
      if (row == column){
        player[6] += 1;
      }
      if (row == 2 - column){
        player[7] += 1;
      }
    }

    for (int index = 0; index < 8; index++){
      if (A[index] == 3){
        return "A";
      }
      if (B[index] == 3){
        return "B";
      }
    }

    if (moves.length == 9){
      return "Draw";
    }

    return "Pending";
  }
}