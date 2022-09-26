class Solution {
public:
  bool checkIfPangram(string sentence) {
    unordered_set<char> mySet;
    for (int index = 0; index < sentence.size(); index++){
      char letter = sentence[index];
      mySet.insert(letter);
    }

    return mySet.size() == 26;
  }
};