class Solution {
public:
  int largestInteger(int num) {
    string stringNum = to_string(num);
    vector<char> evenNum;
    vector<char> oddNum;
    for (int index = 0; index < stringNum.size(); index++){
      int value = (int) stringNum[index];
      if (value % 2 == 0){
        evenNum.push_back(stringNum[index]);
      }
      else{
        oddNum.push_back(stringNum[index]);
      }
    }
    sort(evenNum.begin(), evenNum.end());
    sort(oddNum.begin(), oddNum.end());

    string result = "";
    for (int index = 0; index < stringNum.size(); index++){
      int value = (int) stringNum[index];
      if (value % 2 == 0){
        result += evenNum[evenNum.size() - 1];
        evenNum.pop_back();
      }
      else{
        result += oddNum[oddNum.size() - 1];
        oddNum.pop_back();
      }
    }

    return stoi(result);
  }
};