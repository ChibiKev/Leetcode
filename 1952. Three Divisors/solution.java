class Solution {
  public boolean isThree(int n) {
    int count = 2;
    for (int index = 2; index < n; index++){
      if (n % index == 0){
        count += 1;
      }
    }
    return count == 3;
  }
}