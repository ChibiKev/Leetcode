class Solution {
  public int sumOfMultiples(int n) {
    int total = 0;
    for (int index = 1; index < n + 1; index++){
      if (index % 3 == 0 || index % 5 == 0 || index % 7 == 0){
        total += index;
      }
    }
    return total;
  }
}