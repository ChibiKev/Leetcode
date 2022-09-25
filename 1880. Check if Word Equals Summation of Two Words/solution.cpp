class Solution {
public:
  bool isSumEqual(string firstWord, string secondWord, string targetWord) {
    string firstAddition = "";
    for (int index = 0; index < firstWord.size(); index++){
      char letter = firstWord[index];
      firstAddition += ((int) letter - 97) + '0';
    }

    string secondAddition = "";
    for (int index = 0; index < secondWord.size(); index++){
      char letter = secondWord[index];
      secondAddition += ((int) letter - 97) + '0';
    }

    string targetAddition = "";
    for (int index = 0; index < targetWord.size(); index++){
      char letter = targetWord[index];
      targetAddition += ((int) letter - 97) + '0';
    }

    return stoi(firstAddition) + stoi(secondAddition) == stoi(targetAddition);
  }
};