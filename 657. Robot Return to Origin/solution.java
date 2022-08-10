class Solution {
  public boolean judgeCircle(String moves) {
    int up = 0;
    int left = 0;

    for (int index = 0; index < moves.length(); index++){
      Character move = moves.charAt(index);
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
  }
}