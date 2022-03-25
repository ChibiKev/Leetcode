class Solution(object):
  def summaryRanges(self, nums):
    """
    :type nums: List[int]
    :rtype: List[str]
    """
    result = []
    if len(nums) == 0:
      return result
    
    lastNum = nums[0]
    for index, num in enumerate(nums):
      nextNum = num
      if index != len(nums) - 1:
        nextNum = nums[index + 1]
        if num + 1 == nextNum:
          continue
      if lastNum == num:
        result.append(str(num))
      else:
        result.append(str(lastNum) + "->" + str(num))
      lastNum = nextNum
    
    return result