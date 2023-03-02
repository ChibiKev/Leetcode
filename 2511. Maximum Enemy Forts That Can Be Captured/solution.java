class Solution {
  public int captureForts(int[] forts) {
    int result = 0;
    int startingPosition = -1;
    for (int index = 0; index < forts.length; index++){
      int fort = forts[index];
      if (fort == 1){
        startingPosition = index;
      }
      else if (fort == -1 && startingPosition != -1){
        int distance = index - startingPosition - 1;
        startingPosition = -1;
        if (distance > result){
          result = distance;
        }
      }
    }
    
    startingPosition = -1;
    for (int index = forts.length - 1; index > -1; index--){
      int fort = forts[index];
      if (fort == 1){
        startingPosition = index;
      }
      else if (fort == -1 && startingPosition != -1){
        int distance = startingPosition - index - 1;
        startingPosition = -1;
        if (distance > result){
          result = distance;
        }
      }
    }

    return result;
  }
}