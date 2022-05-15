class Solution {
  public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
    Set<Integer> nums1Set = new HashSet<>();
    Set<Integer> nums2Set = new HashSet<>();
    
    for (int index = 0; index < nums1.length; index++){
      nums1Set.add(nums1[index]);
    }
    
    for (int index = 0; index < nums2.length; index++){
      nums2Set.add(nums2[index]);
    }

    List<List<Integer>> result = new ArrayList<List<Integer>>();
    
    List<Integer> answer0 = new ArrayList<Integer>();
    for(Integer num : nums1Set){
      if (!nums2Set.contains(num)){
        answer0.add(num);
      }
    }
    result.add(answer0);
    
    List<Integer> answer1 = new ArrayList<Integer>();
    for(Integer num : nums2Set){
      if (!nums1Set.contains(num)){
        answer1.add(num);
      }
    }
    result.add(answer1);
    
    return result;
  }
}