class Solution(object):
  def intersect(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: List[int]
    """
    nums1Dictionary = {}
    result = []
    
    for num in nums1:
      if not num in nums1Dictionary:
        nums1Dictionary[num] = 1
      else:
        nums1Dictionary[num] += 1
    
    for num in nums2:
      if num in nums1Dictionary:
        if nums1Dictionary[num] > 0:
          result.append(num)
          nums1Dictionary[num] -= 1
          
    return result