class Solution {
  public String reversePrefix(String word, char ch) {
    for (int index = 0; index < word.length(); index++){
      Character letter = word.charAt(index);
      if (letter == ch){
        String splitWord = word.substring(0, index + 1);
        String reverseWord = "";
        for (int index2 = splitWord.length() - 1; index2 > -1; index2--){
          reverseWord += splitWord.charAt(index2);
        }
        return reverseWord + word.substring(index + 1);      
      }
    }

    return word;
  }
}