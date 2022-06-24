class Solution {
public:
  string interpret(string command) {
    string result = "";
    int index = 0;
    while (index < command.size()){
      char letter = command[index];
      if (letter == 'G'){
        result += "G";
        index += 1;
      }
      else if (letter == '('){
        char nextLetter = command[index + 1];
        if (nextLetter == ')'){
          result += "o";
          index += 2;
        }
        else if (nextLetter == 'a'){
          result += "al";
          index += 4;
        }
      }
    }

    return result;
  }
};