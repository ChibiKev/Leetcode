class Solution {
public:
  int countBalls(int lowLimit, int highLimit) {
    unordered_map<int, int> dictionary;

    for (int num = lowLimit; num < highLimit + 1; num++){
      int total = 0;
      string stringNum = to_string(num);
      for (int charNum = 0; charNum < stringNum.size(); charNum++){
        total += (int) stringNum[charNum] - 48;
      }
      dictionary[total]++;
    }

    int highestCount = 0;
    for (auto num : dictionary){
      if (num.second > highestCount){
        highestCount = num.second;
      }
    }

    return highestCount;
  }
};