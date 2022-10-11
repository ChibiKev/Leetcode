class Solution {
public:
    int minimumRecolors(string blocks, int k) {
      int white = 0;
      int result = INT_MAX;
      for (int index = 0; index < blocks.size(); index++){
        char value = blocks[index];
        if (index >= k){
          if (white < result){
            result = white;
          }
        }
        if (value == 'W'){
          white += 1;
        }
        if (index >= k && blocks[index - k] == 'W'){
          white -= 1;
        }
      }

      if (white < result){
        result = white;
      }

      return result;
    }
};