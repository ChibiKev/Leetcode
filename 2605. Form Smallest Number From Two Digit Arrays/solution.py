class Solution(object):
  def minNumber(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: int
    """
    storage = [0] * 9
    num1Min = 10
    num2Min = 10
    for num in nums1:
      storage[num - 1] += 1
      if num < num1Min:
        num1Min = num
    for num in nums2:
      storage[num - 1] += 1
      if num < num2Min:
        num2Min = num
    
    for index, num in enumerate(storage):
      if num >= 2:
        return index + 1
    
    if num1Min > num2Min:
      return (num2Min * 10) + num1Min
    
    return (num1Min * 10) + num2Min