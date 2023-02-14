class Solution {
  public int subtractProductAndSum(int n) {
    List<Integer> values = new ArrayList<Integer>();
    int tempNumber = n;
    while (tempNumber > 0){
      values.add(tempNumber % 10);
      tempNumber /= 10;
    }

    int product = 1;
    int totalSum = 0;
    for (int index = 0; index < values.size(); index++){
      int value = values.get(index);
      product *= value;
      totalSum += value;
    }
    
    return product - totalSum;
  }
}