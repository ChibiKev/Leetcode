class Solution(object):
  def getCommon(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: int
    """
    nums1Index = 0
    nums2Index = 0
    result = -1
    while nums1Index < len(nums1) and nums2Index < len(nums2):
      nums1Value = nums1[nums1Index]
      nums2Value = nums2[nums2Index]
      if nums1Value == nums2Value:
        result = nums1Value
        break
      elif nums1Value > nums2Value:
        nums2Index += 1
      elif nums1Value < nums2Value:
        nums1Index += 1
    return result