class Solution {
  public int sumOfUnique(int[] nums) {
    Map<Integer, Integer> numsDictionary = new HashMap<>();
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (numsDictionary.containsKey(num)){
        numsDictionary.put(num, numsDictionary.get(num) + 1);
      }
      else{
        numsDictionary.put(num, 1);
      }
    }

    int total = 0;
    for (Map.Entry<Integer, Integer> num : numsDictionary.entrySet()){
      if (num.getValue() == 1){
        total += num.getKey();
      }   
    }

    return total;
  }
}