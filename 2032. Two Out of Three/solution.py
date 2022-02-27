class Solution(object):
  def twoOutOfThree(self, nums1, nums2, nums3):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :type nums3: List[int]
    :rtype: List[int]
    """
    nums1Set = set(nums1)
    nums2Set = set(nums2)
    nums3Set = set(nums3)
    nums1Setxnums2Set = nums1Set.intersection(nums2Set)
    nums2Setxnums3Set = nums2Set.intersection(nums3Set)
    nums3Setxnums1Set = nums3Set.intersection(nums1Set)
    
    result = nums1Setxnums2Set.union(nums2Setxnums3Set.union(nums3Setxnums1Set))
      
    return result