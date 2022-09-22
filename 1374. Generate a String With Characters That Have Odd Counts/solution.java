class Solution {
  public String generateTheString(int n) {
    String result = "";
    for (int index = 0; index < n - 1; index++){
      result += 'a';
    }
    if (n % 2 == 1){
      return result + 'a';
    }
    return result + 'b';
  }
}