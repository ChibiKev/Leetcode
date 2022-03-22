class Solution {
  public int[] sortEvenOdd(int[] nums) {
    List<Integer> oddIndex = new ArrayList<Integer>();
    List<Integer> evenIndex = new ArrayList<Integer>();
    
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (index % 2 == 0){
        evenIndex.add(num);
      }
      else{
        oddIndex.add(num);
      }
    }
    
    Collections.sort(oddIndex);
    Collections.sort(evenIndex);

    int[] result = new int[nums.length];
    int count = 0;
    for (int index = 0; index < oddIndex.size(); index++){
      int even = evenIndex.get(index);
      int odd = oddIndex.get(oddIndex.size() - 1 - index);
      result[count++] = even;
      result[count++] = odd;
    }

    if (nums.length % 2 != 0){
      result[count++] = evenIndex.get(evenIndex.size() - 1);
    }

    return result;
  }
}