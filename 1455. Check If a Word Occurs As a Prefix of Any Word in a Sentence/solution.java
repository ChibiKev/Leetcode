class Solution {
  public int isPrefixOfWord(String sentence, String searchWord) {
    int word = 1;
    int search = 0;
    boolean jump = false;

    for (int index = 0; index < sentence.length(); index++){
      Character letter = sentence.charAt(index);
      if (jump && letter != ' '){
        continue;
      }
      else if (letter == ' '){
        jump = false;
        search = 0;
        word += 1;
        continue;
      }
      if (letter == searchWord.charAt(search)){
        search += 1;
      }
      else{
        jump = true;
        search = 0;
      }
      if (search == searchWord.length()){
        return word;
      }
    }

    return -1;
  }
}