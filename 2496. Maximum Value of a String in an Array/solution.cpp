class Solution {
public:
  int maximumValue(vector<string>& strs) {
    int result = 0;
    for (int index = 0; index < strs.size(); index++){
      string value = strs[index];
      int currentCount = value.size();
      bool isInt = true;
      for (int index2 = 0; index2 < value.size(); index2++){
        if (value[index2] - 'a' > 0 || value[index2] - 'a' == 0){
          isInt = false;
          break;
        }
      }
      if (isInt){
        currentCount = stoi(value);
      }
      if (currentCount > result){
        result = currentCount;
      }
    }
    return result;
  }
};