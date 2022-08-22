class Solution {
public:
  int secondHighest(string s) {
    int firstMax = -1;
    int secondMax = -1;

    for (int index = 0; index < s.size(); index++){
      char value = s[index];
      if (isdigit(value)){
        int num = (int) value - 48;
        if (firstMax < num){
          secondMax = firstMax;
          firstMax = num;
        }
        else if (firstMax > num && secondMax < num){
          secondMax = num;
        }
      }
    }

    return secondMax;
  }
};