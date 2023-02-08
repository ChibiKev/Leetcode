class Solution(object):
  def merge(self, nums1, m, nums2, n):
    """
    :type nums1: List[int]
    :type m: int
    :type nums2: List[int]
    :type n: int
    :rtype: None Do not return anything, modify nums1 in-place instead.
    """
    nums1Index = m - 1
    nums2Index = n - 1
    insertIndex = m + n - 1

    while insertIndex >= 0 and nums2Index >= 0:
      if nums1Index >= 0 and nums1[nums1Index] > nums2[nums2Index]:
        nums1[insertIndex] = nums1[nums1Index]
        nums1Index -= 1
      else:
        nums1[insertIndex] = nums2[nums2Index]
        nums2Index -= 1
      insertIndex -= 1
    return nums1