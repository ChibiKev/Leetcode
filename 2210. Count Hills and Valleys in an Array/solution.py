class Solution(object):
  def countHillValley(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    newNums = [nums[0]]
    for num in nums[1:]:
      if newNums[-1] != num:
        newNums.append(num)
    
    count = 0
    for index in range(1, len(newNums) - 1):
      before = newNums[index - 1]
      current = newNums[index]
      after = newNums[index + 1]
      if before < current and current > after:
        count += 1
      elif before > current and current < after:
        count += 1
    return count