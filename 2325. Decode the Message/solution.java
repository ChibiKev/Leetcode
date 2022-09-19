class Solution {
  public String decodeMessage(String key, String message) {
    Map<Character, Character> dictionary = new HashMap<>();
    Character countLetter = 'a';
    for (int index = 0; index < key.length(); index++){
      Character letter = key.charAt(index);
      if (letter != ' '){
        if (dictionary.get(letter) == null){
          dictionary.put(letter, countLetter);
          countLetter = (char) ((int) countLetter + 1);
        }
      }
    }

    String result = "";
    for (int index = 0; index < message.length(); index++){
      Character letter = message.charAt(index);
      if (letter != ' '){
        result += dictionary.get(letter);
      }
      else{
        result += ' ';
      }
    }

    return result;
  }
}