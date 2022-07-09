class Solution {
  public int rearrangeCharacters(String s, String target) {
    if (target.length() > s.length()){
      return 0;
    }
    
    Map<Character, Integer> sDictionary = new HashMap<>();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (sDictionary.containsKey(letter)){
        sDictionary.put(letter, sDictionary.get(letter) + 1);
      }
      else{
        sDictionary.put(letter, 1);
      }
    }
    
    Map<Character, Integer> targetDictionary = new HashMap<>();
    for (int index = 0; index < target.length(); index++){
      Character letter = target.charAt(index);
      if (targetDictionary.containsKey(letter)){
        targetDictionary.put(letter, targetDictionary.get(letter) + 1);
      }
      else{
        targetDictionary.put(letter, 1);
      }
    }

    double result = Double.POSITIVE_INFINITY;
    for (Map.Entry<Character, Integer> letter : targetDictionary.entrySet()){
      if (sDictionary.get(letter.getKey()) != null){
        result = Math.min(result, Math.floor(sDictionary.get(letter.getKey()) / letter.getValue()));
      }
      else{
        return 0;      
      }
    }

    return (int) result;
  }
}