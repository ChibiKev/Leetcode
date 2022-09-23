class Solution {
public:
  string longestNiceSubstring(string s) {
    if (s.size() < 2){
      return "";    
    }

    unordered_set<char> mySet;
    for (int index = 0; index < s.size(); index++){
      mySet.insert(s[index]);
    }
    
    for (int index = 0; index < s.size(); index++){
      if (mySet.count(tolower(s[index])) == 0 || mySet.count(toupper(s[index])) == 0){
        string s1 = longestNiceSubstring(s.substr(0, index));
        string s2 = longestNiceSubstring(s.substr(index + 1));
        if (s2.size() > s1.size()){
          return s2;
        }
        else{
          return s1;
        }
      }
    }

    return s;
  }
};