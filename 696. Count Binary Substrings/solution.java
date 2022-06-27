class Solution {
  public int countBinarySubstrings(String s) {
    int current = 1;
    int previous = 0;
    int result = 0;
    for (int index = 1; index < s.length(); index++){
      if (s.charAt(index) == s.charAt(index - 1)){
        current += 1;
      }
      else{
        int minimum = previous;
        if (previous > current){
          minimum = current;
        }
        result += minimum;
        previous = current;
        current = 1;
      }
    }

    int minimum = previous;
    if (previous > current){
      minimum = current;
    }
    return result + minimum;
  }
}