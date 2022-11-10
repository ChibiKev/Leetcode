class Solution {
public:
  int countLargestGroup(int n) {
    unordered_map<int, int> dictionary;

    for (int index = 1; index < n + 1; index++){
      int total = 0;
      string stringIndex = to_string(index);
      for (int charIndex = 0; charIndex < stringIndex.size(); charIndex++){
        total += (int) stringIndex[charIndex] - 48;
      }
      dictionary[total]++;
    }

    int totalCount = 0;
    int highestCount = 0;
    for (auto num : dictionary){
      if (num.second > highestCount){
        highestCount = num.second;
        totalCount = 1;
      }
      else if (num.second == highestCount){
        totalCount += 1;
      }
    }

    return totalCount;
  }
};