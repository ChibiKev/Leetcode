class Solution {
public:
  int maximumNumberOfStringPairs(vector<string>& words) {
    unordered_set<string> mySet;
    int count = 0;

    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      if (mySet.count(word) == 1){
        count += 1;
      }
      else{
        string reverseWord = word;
        reverse(reverseWord.begin(), reverseWord.end());
        mySet.insert(reverseWord);
      }
    }

    return count;
  }
};