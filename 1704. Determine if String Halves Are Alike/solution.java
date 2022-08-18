class Solution {
  public boolean halvesAreAlike(String s) {
    Set<Character> vowels = new HashSet<Character>(Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));

    int a = 0;
    int b = 0;

    for (int index = 0; index < s.length() / 2; index++){
      if (vowels.contains(s.charAt(index))){
        a += 1;
      }
      if (vowels.contains(s.charAt(index + s.length() / 2))){
        b += 1;
      }
    }

    return a == b;
  }
}