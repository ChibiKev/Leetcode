class Solution {
  public boolean validPalindrome(String s) {
    int start = 0;
    int end = s.length() - 1;

    while (start < end){
      if (s.charAt(start) != s.charAt(end)){
        int newStart = start;
        int newEnd = end - 1;
        int newStart2 = start + 1;
        int newEnd2 = end;
        while (newStart < newEnd && s.charAt(newStart) == s.charAt(newEnd)){
          newStart++;
          newEnd--;
        }
        while (newStart2 < newEnd2 && s.charAt(newStart2) == s.charAt(newEnd2)){
          newStart2++;
          newEnd2--;
        }
        return newStart >= newEnd || newStart2 >= newEnd2;
      }
      start += 1;
      end -= 1;
    }

    return true;
  }
}