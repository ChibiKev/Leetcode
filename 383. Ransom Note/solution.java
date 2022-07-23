class Solution {
  public boolean canConstruct(String ransomNote, String magazine) {
    Map<Character, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < magazine.length(); index++){
      Character letter = magazine.charAt(index);
      if (dictionary.containsKey(letter)){
        dictionary.put(letter, dictionary.get(letter) + 1);
      }
      else{
        dictionary.put(letter, 1);
      }
    }

    for (int index = 0; index < ransomNote.length(); index++){
      Character letter = ransomNote.charAt(index);
      if (dictionary.containsKey(letter) && dictionary.get(letter) > 0){
        dictionary.put(letter, dictionary.get(letter) - 1);
      }
      else{
        return false;
      }
    }

    return true;
  }
}