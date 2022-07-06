class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()){
      return false;    
    }

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
    
    for (int index = 0; index < t.length(); index++){
      Character letter = t.charAt(index);
      if (!dictionary.containsKey(letter)){
        return false;
      }
      else{
        if (dictionary.get(letter) > 0){
          dictionary.put(letter, dictionary.get(letter) - 1);      
        }
        else{
          return false;        
        }
      }
    }

    return true;
  }
}