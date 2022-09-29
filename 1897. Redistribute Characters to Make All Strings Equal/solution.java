class Solution {
  public boolean makeEqual(String[] words) {
    Map<Character, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      for (int index2 = 0; index2 < word.length(); index2++){
        Character letter = word.charAt(index2);
        if (dictionary.containsKey(letter)){
          dictionary.put(letter, dictionary.get(letter) + 1);
        }
        else{
          dictionary.put(letter, 1);
        }
      }
    }
    
    for (Map.Entry<Character, Integer> letter : dictionary.entrySet()){
      if (letter.getValue() % words.length != 0){
        return false;
      }
    }

    return true;
  }
}