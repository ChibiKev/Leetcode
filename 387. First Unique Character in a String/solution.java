class Solution {
  public int firstUniqChar(String s) {
    Map<Character, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < s.length(); index++){
      char letter = s.charAt(index);
      if (dictionary.containsKey(letter)){
        dictionary.put(letter, dictionary.get(letter) + 1);
      }
      else{
        dictionary.put(letter, 1);
      }
    }

    for (int index = 0; index < s.length(); index++){
      char letter = s.charAt(index);
      if (dictionary.get(letter) == 1){
        return index;
      }
    }

    return -1;
  }
}