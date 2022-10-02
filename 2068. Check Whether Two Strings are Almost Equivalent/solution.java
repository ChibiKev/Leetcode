class Solution {
  public boolean checkAlmostEquivalent(String word1, String word2) {
    Map<Character, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < word1.length(); index++){
      Character letter = word1.charAt(index);
      if (dictionary.containsKey(letter)){
        dictionary.put(letter, dictionary.get(letter) + 1);
      }
      else{
        dictionary.put(letter, 1);
      }
    }

    for (int index = 0; index < word2.length(); index++){
      Character letter = word2.charAt(index);
      if (dictionary.containsKey(letter)){
        dictionary.put(letter, dictionary.get(letter) - 1);
      }
      else{
        dictionary.put(letter, -1);
      }
    }

    for (Map.Entry<Character, Integer> letter : dictionary.entrySet()){
      if (Math.abs(letter.getValue()) > 3){
        return false;
      }
    }

    return true;
  }
}