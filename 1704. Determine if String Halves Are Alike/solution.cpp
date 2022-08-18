class Solution {
public:
  bool halvesAreAlike(string s) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};

    int a = 0;
    int b = 0;

    for (int index = 0; index < s.size() / 2; index++){
      if (vowels.count(s[index]) == 1){
        a += 1;
      }
      if (vowels.count(s[index + s.size() / 2]) == 1){
        b += 1;
      }
    }

    return a == b;
  }
};