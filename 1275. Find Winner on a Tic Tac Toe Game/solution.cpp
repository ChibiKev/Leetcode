class Solution {
public:
  string tictactoe(vector<vector<int>>& moves) {
    vector<int> A(8, 0);
    vector<int> B(8, 0);

    for (int index = 0; index < moves.size(); index++){
      int row = moves[index][0];
      int column = moves[index][1];
      vector<int> &player = (index % 2 == 0) ? A : B;
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

    if (moves.size() == 9){
      return "Draw";
    }

    return "Pending";
  }
};