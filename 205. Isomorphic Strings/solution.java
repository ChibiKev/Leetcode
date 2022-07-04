class Solution {
  public boolean isIsomorphic(String s, String t) {
    Map<Character, Character> sDictionary = new HashMap<>();
    Map<Character, Character> tDictionary = new HashMap<>();

    for (int index = 0; index < s.length(); index++){
      Character sLetter = s.charAt(index);
      Character tLetter = t.charAt(index);
      if (sDictionary.containsKey(sLetter)){
        if (sDictionary.get(sLetter) != tLetter){
          return false;        
        }
      }
      else{
        sDictionary.put(sLetter, tLetter);
      }
      if (tDictionary.containsKey(tLetter)){
        if (tDictionary.get(tLetter) != sLetter){
          return false;        
        }
      }
      else{
        tDictionary.put(tLetter, sLetter);      
      }
    }

    return true;
  }
}