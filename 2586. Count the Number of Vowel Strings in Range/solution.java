class Solution {
  public int vowelStrings(String[] words, int left, int right) {
    Set<Character> vowels = new HashSet<Character>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
    int count = 0;
    for (int index = left; index < right + 1; index++){
      String word = words[index];
      if (vowels.contains(word.charAt(0)) && vowels.contains(word.charAt(word.length() - 1))){
        count += 1;
      }
    }
    return count;
  }
}