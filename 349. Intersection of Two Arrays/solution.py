class Solution(object):
  def intersection(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: List[int]
    """
    nums1Set = set(nums1)
    nums2Set = set(nums2)
    
    return nums1Set.intersection(nums2Set)