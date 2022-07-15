class Solution {
public:
  string convertToTitle(int columnNumber) {
    char letters[26] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

    string result = "";
    while (columnNumber > 0){
      result += letters[(columnNumber - 1) % 26];
      columnNumber = (columnNumber - 1) / 26;
    }

    reverse(result.begin(), result.end());
    return result;
  }
};