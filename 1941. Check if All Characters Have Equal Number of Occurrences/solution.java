class Solution {
  public boolean areOccurrencesEqual(String s) {
    Map<Character, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (dictionary.containsKey(letter)){
        dictionary.put(letter, dictionary.get(letter) + 1);
      }
      else{
        dictionary.put(letter, 1);
      }
    }

    int amount = dictionary.get(s.charAt(0));
    for (Map.Entry<Character, Integer> letter : dictionary.entrySet()){
      if (letter.getValue() != amount){
        return false;
      }
    }

    return true;
  }
}