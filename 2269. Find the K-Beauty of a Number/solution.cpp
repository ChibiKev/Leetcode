class Solution {
public:
  int divisorSubstrings(int num, int k) {
    string strNum = to_string(num);
    int result = 0;

    for (int index = 0; index < strNum.size() - k + 1; index++){
      int value = stoi(strNum.substr(index, k));
      if (value != 0 && num % value == 0){
        result += 1;
      }
    }

    return result;
  }
};