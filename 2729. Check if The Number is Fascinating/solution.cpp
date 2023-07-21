class Solution {
public:
  bool isFascinating(int n) {
    int timesTwo = n * 2;
    int timesThree = n * 3;
    string concat = to_string(n) + to_string(timesTwo) + to_string(timesThree);
    unordered_set<char> concatSet = unordered_set<char>(concat.begin(), concat.end());
    return (concatSet.size() == 9) && (concat.size() == 9) && (concatSet.count('0') == 0);
  }
};