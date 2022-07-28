class Solution {
public:
  int longestPalindrome(string s) {
    unordered_map<char,int> dictionary;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      dictionary[letter]++;
    };

    bool odd = false;
    int count = 0;

    for (auto value : dictionary){
      if (value.second > 2 || value.second % 2 == 0){
        count += value.second;
        if (value.second % 2 != 0){
          count -= 1;
        }
      }
      if (value.second % 2 != 0){
        odd = true;
      }  
    }

    if (odd){
      count += 1;
    }

    return count;
  }
};