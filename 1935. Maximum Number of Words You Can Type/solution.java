class Solution {
  public int canBeTypedWords(String text, String brokenLetters) {
    Set<Character> letterSet = new HashSet<>();
    for (int index = 0; index < brokenLetters.length(); index++){
      letterSet.add(brokenLetters.charAt(index));
    }
    int count = 0;
    boolean word = false;
    for (int index = 0; index < text.length(); index++){
      Character letter = text.charAt(index);
      if (word && letter != ' '){
        continue;
      }
      if (letterSet.contains(letter)){
        word = true;
      }
      if (letter == ' ' || index == text.length() - 1){
        if (word == false){
          count += 1;
        }
        word = false;
      }
    }

    return count;
  }
}