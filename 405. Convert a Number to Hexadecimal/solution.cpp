class Solution {
public:
  string toHex(int num) {
    unordered_map<int, string> hexValue = {
      {0, "0"},
      {1, "1"},
      {2, "2"},
      {3, "3"},
      {4, "4"},
      {5, "5"},
      {6, "6"},
      {7, "7"},
      {8, "8"},
      {9, "9"},
      {10, "a"},
      {11, "b"},
      {12, "c"},
      {13, "d"},
      {14, "e"},
      {15, "f"}
    };

    long value = num;

    if (value == 0){
      return "0";
    }
    else if (value < 0){
      value += pow(2, 32);
    }

    string result = "";
    while (value > 0){
      int bit = value % 16;
      result = hexValue[bit] + result;
      value /= 16;
    }

    return result;
  }
};