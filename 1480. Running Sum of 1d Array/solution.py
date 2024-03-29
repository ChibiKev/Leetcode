class Solution(object):
  def runningSum(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    runningSum = [nums[0]]
    for num in nums[1:]:
      runningSum.append(runningSum[-1] + num)
    return runningSum