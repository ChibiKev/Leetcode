class Solution {
  public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
    List<Integer> keys = new ArrayList<Integer>();
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (key == num){
        keys.add(index);
      }
    }

    int keyIndex = 0;
    List<Integer> result = new ArrayList<Integer>();
    for (int index = 0; index < nums.length; index++){
      if (keyIndex < keys.size()){
        if (Math.abs(index - keys.get(keyIndex)) <= k){
          result.add(index);
        }
        else if (keyIndex + 1 < keys.size()){
          if (Math.abs(index - keys.get(keyIndex + 1)) <= k){
            keyIndex += 1;
            result.add(index);
          }
        }
      }
    }

    return result;
  }
}