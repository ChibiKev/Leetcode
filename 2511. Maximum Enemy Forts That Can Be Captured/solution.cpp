class Solution {
public:
  int captureForts(vector<int>& forts) {
    int result = 0;
    int startingPosition = -1;
    for (int index = 0; index < forts.size(); index++){
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
    for (int index = forts.size() - 1; index > -1; index--){
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
};