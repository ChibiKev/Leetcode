class Solution {
public:
  int countSegments(string s) {
    int count = 0;
    bool found = false;

    for (int index = 0; index < s.size(); index++){
      char character = s[index];
      if (character == ' ' && found == true){
        count += 1;
        found = false;
      }
      else if (character != ' '){
        found = true;
      }
    }

    if (found == true){
      return count + 1;
    }

    return count;
  }
};