class Solution {
public:
  int minimumMoves(string s) {
    int index = 0;
    int count = 0;

    while (index < s.size()){
      if (s[index] == 'X'){
        count += 1;
        index += 3;
      }
      else{
        index += 1;      
      }
    }

    return count;
  }
};