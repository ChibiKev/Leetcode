class Solution {
public:
  string decodeMessage(string key, string message) {
    unordered_map<char, char> dictionary;
    char countLetter = 'a';
    for (int index = 0; index < key.size(); index++){
      char letter = key[index];
      if (letter != ' '){
        if (dictionary.count(letter) == 0){
          dictionary[letter] = countLetter;
          countLetter = (char) ((int) countLetter + 1);
        }
      }
    }

    string result = "";
    for (int index = 0; index < message.size(); index++){
      char letter = message[index];
      if (letter != ' '){
        result += dictionary[letter];
      }
      else{
        result += ' ';
      }
    }

    return result;
  }
};