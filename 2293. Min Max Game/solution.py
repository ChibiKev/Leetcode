class Solution(object):
  def minMaxGame(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    if len(nums) == 1:
      return nums[0]
    
    newNums = []
    for index in range(len(nums) /2):
      if index % 2 == 0:
        newNums.append(min(nums[2 * index], nums[2 * index + 1]))
      else:
        newNums.append(max(nums[2 * index], nums[2 * index + 1]))
        
    result = self.minMaxGame(newNums)
    return result