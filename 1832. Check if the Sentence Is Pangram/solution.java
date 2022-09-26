class Solution {
  public boolean checkIfPangram(String sentence) {
    Set<Character> mySet = new HashSet<>();
    for (int index = 0; index < sentence.length(); index++){
      Character letter = sentence.charAt(index);
      mySet.add(letter);
    }

    return mySet.size() == 26;
  }
}