class Solution {
public:
  int minOperations(string s) {
    char current = s[0];
    int count = 0;
    for (int index = 0; index < s.size(); index++){
      char number = s[index];
      if (current != number){
        count += 1;
      }
      if (current == '0'){
        current = '1';
      }
      else{
        current = '0';
      }
    }

    if (s.size() - count < count){
      count = s.size() - count;
    }

    return count;
  }
};