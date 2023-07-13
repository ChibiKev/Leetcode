class Solution {
  public int countSeniors(String[] details) {
    int result = 0;
    for (int index = 0; index < details.length; index++){
      String detail = details[index];
      if (Integer.parseInt(detail.substring(11, 13)) > 60){
        result += 1;
      }
    }
    return result;
  }
}