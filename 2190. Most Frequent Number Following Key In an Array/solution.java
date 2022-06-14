class Solution {
  public int mostFrequent(int[] nums, int key) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    int count = 0;
    int result = nums[0];
    for (int index = 0; index < nums.length - 1; index++){
      int num = nums[index];
      if (num == key){
        int nextNum = nums[index + 1];
        if (dictionary.containsKey(nextNum)){
          dictionary.put(nextNum, dictionary.get(nextNum) + 1);
        }
        else{
          dictionary.put(nextNum, 1);
        }
        if (dictionary.get(nextNum) > count){
          count = dictionary.get(nextNum);
          result = nextNum;
        }
      }
    }

    return result;
  }
}