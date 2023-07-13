class Solution {
public:
  int countSeniors(vector<string>& details) {
    int result = 0;
    for (int index = 0; index < details.size(); index++){
      string detail = details[index];
      if (stoi(detail.substr(11, 2)) > 60){
        result += 1;
      }
    }
    return result;
  }
};