class Solution {
  public int minimumRecolors(String blocks, int k) {
    int white = 0;
    double result = Double.POSITIVE_INFINITY;
    for (int index = 0; index < blocks.length(); index++){
      Character value = blocks.charAt(index);
      if (index >= k){
        if (white < result){
          result = white;
        }
      }
      if (value == 'W'){
        white += 1;
      }
      if (index >= k && blocks.charAt(index - k) == 'W'){
        white -= 1;
      }
    }

    if (white < result){
      result = white;
    }

    return (int) result;
  }
}