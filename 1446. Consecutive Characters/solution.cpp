class Solution {
public:
  int maxPower(string s) {
    int count = 1;
    int answer = 1;
    for (int index = 1; index < s.size(); index++){
      if (s[index] == s[index - 1]){
        count += 1;
        if (count > answer){
          answer = count;
        }
      }
      else{
        count = 1;
      }
    }

    return answer;
  }
};