class Solution {
  public void reverseString(char[] s) {
    int left = 0;

    while (left < (s.length / 2)){
      Character temp = s[left];
      s[left] = s[s.length - 1 - left];
      s[s.length - 1 - left] = temp;
      left += 1;
    }
  }
}