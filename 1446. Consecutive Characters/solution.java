class Solution {
  public int maxPower(String s) {
    int count = 1;
    int answer = 1;
    for (int index = 1; index < s.length(); index++){
      if (s.charAt(index) == s.charAt(index - 1)){
        count += 1;
        if (count > answer){
          answer = count;
        }
      }
      else{
        count = 1;
      }
    }

    return answer;
  }
}