class Solution {
public:
  string firstPalindrome(vector<string>& words) {
    string result = "";
    for(int i = 0; i < words.size(); i++){
      int lengthOfWord = words[i].size();
      bool found = false;
      for(int j = 0; j < lengthOfWord/2; j++){
        if(words[i][j] == words[i][lengthOfWord - j - 1]){
          found = true;
        }
        else{
          found = false;
          break;
        }
      }
      if(found == true || lengthOfWord == 1){
        result = words[i];
        break;
      }
    }
    return result;
  }
};