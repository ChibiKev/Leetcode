class Solution(object):
  def shuffle(self, nums, n):
    """
    :type nums: List[int]
    :type n: int
    :rtype: List[int]
    """
    result = []
    for index in range(n):
      result.append(nums[index])
      result.append(nums[n + index])
    
    return result