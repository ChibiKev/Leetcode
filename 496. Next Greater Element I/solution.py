class Solution(object):
  def nextGreaterElement(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: List[int]
    """
    myDict = {}
    stack = []
    result = []

    for num in nums2:
      while len(stack) and stack[-1] < num:
        myDict[stack.pop()] = num
      stack.append(num)
      
    for num in nums1:
      highest = -1
      if num in myDict:
        highest = myDict[num]
      result.append(highest)
      
    return result