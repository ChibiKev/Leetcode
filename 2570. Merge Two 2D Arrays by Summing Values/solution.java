class Solution {
  public int[][] mergeArrays(int[][] nums1, int[][] nums2) {
    TreeMap<Integer, Integer> dictionary = new TreeMap<>();
    for (int index = 0; index < nums1.length; index++){
      int[] nums = nums1[index];
      int key = nums[0];
      int value = nums[1];
      if (dictionary.containsKey(key)){
        dictionary.put(key, dictionary.get(key) + value);
      }
      else{
        dictionary.put(key, value);
      }
    }

    for (int index = 0; index < nums2.length; index++){
      int[] nums = nums2[index];
      int key = nums[0];
      int value = nums[1];
      if (dictionary.containsKey(key)){
        dictionary.put(key, dictionary.get(key) + value);
      }
      else{
        dictionary.put(key, value);
      }
    }

    int[][] result = new int[dictionary.size()][2];
    int index = 0;

    for (Map.Entry<Integer, Integer> item : dictionary.entrySet()){
      int[] nums = {item.getKey(), item.getValue()};
      result[index] = nums;
      index += 1;
    }
    
    return result;
  }
}