class Solution {
  public int longestPalindrome(String s) {
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

    Boolean odd = false;
    int count = 0;
    
    for (Map.Entry<Character, Integer> value : dictionary.entrySet()){
      if (value.getValue() > 2 || value.getValue() % 2 == 0){
        count += value.getValue();
        if (value.getValue() % 2 != 0){
          count -= 1;
        }
      }
      if (value.getValue() % 2 != 0){
        odd = true;
      }  
    }

    if (odd){
      count += 1;
    }

    return count;
  }
}