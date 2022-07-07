class Solution {
  public String thousandSeparator(int n) {
    if (n < 1000){
      return String.valueOf(n);
    }

    String result = "";
    int count = 0;
    while (n > 0){
      if (count == 3){
        result = '.' + result;
        count = 0;
      }
      else{
        result = String.valueOf(n % 10) + result;
        n /= 10;
        count += 1;
      }
    }

    return result;
  }
}