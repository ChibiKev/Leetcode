class Solution {
  public String greatestLetter(String s) {
    Set<Character> mySet = new HashSet<>();
    for (int index = 0; index < s.length(); index++){
      mySet.add(s.charAt(index));
    }

    Character lowercaseLetter = 'z';
    Character uppercaseLetter = 'Z';

    for (int index = 0; index < 26; index++){
      if (mySet.contains((char) ((int) uppercaseLetter - index)) && mySet.contains((char) ((int) lowercaseLetter - index))){
        return "" + (char) ((int) uppercaseLetter - index);
      }
    }

    return "";
  }
}