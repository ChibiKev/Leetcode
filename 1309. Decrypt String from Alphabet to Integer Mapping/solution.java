class Solution {
  public String freqAlphabets(String s) {
    String result = "";
    int index = s.length() - 1;
    while (index > -1){
      if (s.charAt(index) == '#'){
        Character letter = (char) (Integer.parseInt(s.substring(index - 2, index)) + 96);
        result += letter;
        index -= 2;
      }
      else{
        Character letter = (char) ((s.charAt(index) - '0') + 96);
        result += letter;
      }
      index -= 1;
    }

    String reversedResult = "";
    for (int index2 = result.length() - 1; index2 > -1; index2--){
      reversedResult += result.charAt(index2);
    }
    return reversedResult;
  }
}