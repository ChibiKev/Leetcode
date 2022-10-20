class Solution {
public:
  double calculateTax(vector<vector<int>>& brackets, int income) {
    double result = 0;
    double previous = 0;
    for (int index = 0; index < brackets.size(); index++){
      vector<int> bracket = brackets[index];
      double upper = bracket[0];
      double percent = bracket[1];
      if (income >= upper){
        result += (upper - previous) * percent / 100;
        previous = upper;
      }
      else{
        result += (income - previous) * percent / 100;
        break;
      }
    }
    return result;
  }
};