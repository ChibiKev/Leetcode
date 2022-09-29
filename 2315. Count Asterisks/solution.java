class Solution {
  public int countAsterisks(String s) {
    int count = 0;
    int otherCount = 0;
    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (value == '|'){
        otherCount += 1;
      }
      else if (value == '*' && otherCount % 2 == 0){
        count += 1;
      }
    }

    return count;
  }
}