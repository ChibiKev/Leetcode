class Solution {
  public int minimizedStringLength(String s) {
    Set<Character> mySet = new HashSet<>();
    for (int index = 0; index < s.length(); index++){
      mySet.add(s.charAt(index));
    }
    return mySet.size();
  }
}