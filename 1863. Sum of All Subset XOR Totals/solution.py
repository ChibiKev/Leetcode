class Solution(object):
  def subsetXORSum(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    bits = 0
    for num in nums:
      bits |= num
      
    result = bits * pow(2, len(nums) - 1)
    return result