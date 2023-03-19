class Solution(object):
  def mergeArrays(self, nums1, nums2):
    """
    :type nums1: List[List[int]]
    :type nums2: List[List[int]]
    :rtype: List[List[int]]
    """
    dictionary = {}
    for nums in nums1:
      key = nums[0]
      value = nums[1]
      if key not in dictionary:
        dictionary[key] = value
      else:
        dictionary[key] += value
    for nums in nums2:
      key = nums[0]
      value = nums[1]
      if key not in dictionary:
        dictionary[key] = value
      else:
        dictionary[key] += value

    result = []
    for key in sorted(dictionary):
      result.append([key, dictionary[key]])
    
    return result