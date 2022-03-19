class Solution(object):
  def largestPerimeter(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    sortedNums = sorted(nums, reverse=True)
    
    for index, num in enumerate(sortedNums[:-2]):
      if num < sortedNums[index + 1] + sortedNums[index + 2]:
        return num + sortedNums[index + 1] + sortedNums[index + 2]
    return 0