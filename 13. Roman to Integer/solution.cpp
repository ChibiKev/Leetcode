class Solution {
public:
  int romanToInt(string s) {
    int index = 0;
    int result = 0;
    unordered_map<string, int> dictionary = {
      {"I", 1},
      {"IV", 4},
      {"V", 5},
      {"IX", 9},
      {"X", 10},
      {"XL", 40},
      {"L", 50},
      {"XC", 90},
      {"C", 100},
      {"CD", 400},
      {"D", 500},
      {"CM", 900},
      {"M", 1000}
    };
    while (index < s.size()){
      if (index + 1 < s.size() && dictionary.count(string(1, s[index]) + s[index + 1]) == 1){
        result += dictionary[string(1, s[index]) + s[index + 1]];
        index += 2;
      }
      else{
        result += dictionary[string(1, s[index])];
        index += 1;
      }
    }
    return result;
  }
};