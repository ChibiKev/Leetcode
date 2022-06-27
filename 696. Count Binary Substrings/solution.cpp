class Solution {
public:
  int countBinarySubstrings(string s) {
    int current = 1;
    int previous = 0;
    int result = 0;
    for (int index = 1; index < s.size(); index++){
      if (s[index] == s[index - 1]){
        current += 1;
      }
      else{
        int minimum = previous;
        if (previous > current){
          minimum = current;
        }
        result += minimum;
        previous = current;
        current = 1;
      }
    }

    int minimum = previous;
    if (previous > current){
      minimum = current;
    }
    return result + minimum;
  }
};