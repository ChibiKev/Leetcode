class Solution {
  public String longestNiceSubstring(String s) {
    if (s.length() < 2){
      return "";    
    }

    Set<Character> mySet = new HashSet<>();
    for (int index = 0; index < s.length(); index++){
      mySet.add(s.charAt(index));
    }
    
    for (int index = 0; index < s.length(); index++){
      if (!mySet.contains(Character.toUpperCase(s.charAt(index))) || !mySet.contains(Character.toLowerCase(s.charAt(index)))){
        String s1 = longestNiceSubstring(s.substring(0, index));
        String s2 = longestNiceSubstring(s.substring(index + 1, s.length()));
        if (s2.length() > s1.length()){
          return s2;
        }
        else{
          return s1;
        }
      }
    }

    return s;
  }
}