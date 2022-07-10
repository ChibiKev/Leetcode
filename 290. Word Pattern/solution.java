class Solution {
  public boolean wordPattern(String pattern, String s) {
    String[] sList = s.split(" ");
    
    if (sList.length != pattern.length()){
      return false;
    }

    HashMap<Character, String> patternDictionary = new HashMap<Character, String>();
    HashMap<String, Character> wordDictionary = new HashMap<String, Character>();

    for (int index = 0; index < sList.length; index++){
      String word = sList[index];
      Character letter = pattern.charAt(index);
      if (patternDictionary.containsKey(letter)){
        if (!patternDictionary.get(letter).equals(word)){
          return false;
        }
      }
      else{
        if (wordDictionary.containsKey(word)){
          if (!wordDictionary.get(word).equals(letter)){
            return false;
          }
        }
        patternDictionary.put(letter, word);
        wordDictionary.put(word, letter);
      }
    }

    return true;
  }
}