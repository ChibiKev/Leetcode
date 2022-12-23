class Solution {
  public int pivotInteger(int n) {
    int totalSum = n * (n + 1) / 2;
    for (int index = 1; index < n + 1; index++){
      if (index * (index + 1) == totalSum + index){
        return index;
      }
    }
    return -1;
  }
}