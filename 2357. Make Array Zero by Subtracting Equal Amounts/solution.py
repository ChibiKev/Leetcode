class Solution(object):
  def minimumOperations(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    sortedNums = sorted(nums)
    total = 0
    count = 0
    for num in sortedNums:
      if num - total == 0:
        continue
      else:
        total = num
        count += 1
    return count