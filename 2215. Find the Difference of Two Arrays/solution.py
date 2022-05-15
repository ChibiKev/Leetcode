class Solution(object):
  def findDifference(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: List[List[int]]
    """
    nums1Set = set(nums1)
    nums2Set = set(nums2)
    
    result = [[],[]]
    
    for num in nums1Set:
      if num not in nums2Set:
        result[0].append(num)
        
    for num in nums2Set:
      if num not in nums1Set:
        result[1].append(num)
        
    return result