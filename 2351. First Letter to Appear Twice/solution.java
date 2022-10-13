class Solution {
  public char repeatedCharacter(String s) {
    Set<Character> mySet = new HashSet<>();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (mySet.contains(letter)){
        return letter;
      }
      else{
        mySet.add(letter);
      }
    }
    return '0';
  }
}