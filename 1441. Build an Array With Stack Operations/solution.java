class Solution {
  public List<String> buildArray(int[] target, int n) {
    int current = 1;
    List<String> result = new ArrayList<String>();
    for (int index = 0; index < target.length; index++){
      int num = target[index];
      if (num != current){
        int difference = num - current;
        for (int count = 0; count < difference; count++){
          result.add("Push");
          result.add("Pop");
        }
      }
      result.add("Push");
      current = num + 1;
    }
    return result;
  }
}