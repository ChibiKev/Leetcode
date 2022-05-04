class Solution(object):
  def findFinalValue(self, nums, original):
    """
    :type nums: List[int]
    :type original: int
    :rtype: int
    """
    mySet = set(nums)
    while original in mySet:
        original *= 2
    return original