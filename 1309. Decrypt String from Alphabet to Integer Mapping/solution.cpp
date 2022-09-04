class Solution {
public:
  string freqAlphabets(string s) {
    string result = "";
    int index = s.size() - 1;
    while (index > -1){
      if (s[index] == '#'){
        char letter = (char) (stoi(s.substr(index - 2, 2)) + 96);
        result += letter;
        index -= 2;
      }
      else{
        char letter = (char) ((s[index] - '0') + 96);
        result += letter;
      }
      index -= 1;
    }

    reverse(result.begin(), result.end());
    return result;
  }
};