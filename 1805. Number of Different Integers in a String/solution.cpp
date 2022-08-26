class Solution {
public:
  int numDifferentIntegers(string word) {
    unordered_set<string> setOfNumbers;

    for (int index = 0; index < word.size(); index++){
      if (isdigit(word[index])) {
        string number;
        while (word[index] == '0'){
          index++;          
        }
        while (isdigit(word[index])){
          number += word[index++];
        }
        setOfNumbers.insert(number);
      }
    }

    return setOfNumbers.size();
  }
};