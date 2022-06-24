class Solution {
  public String interpret(String command) {
    String result = "";
    int index = 0;
    while (index < command.length()){
      char letter = command.charAt(index);
      if (letter == 'G'){
        result += "G";
        index += 1;
      }
      else if (letter == '('){
        char nextLetter = command.charAt(index + 1);
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
}