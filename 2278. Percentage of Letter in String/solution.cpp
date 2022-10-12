class Solution {
public:
  int percentageLetter(string s, char letter) {
    double amount = 0.00;
    for (int index = 0; index < s.size(); index++){
      char value = s[index];
      if (value == letter){
        amount += 1;
      }
    }
    return (int) (amount / s.size() * 100);
  }
};