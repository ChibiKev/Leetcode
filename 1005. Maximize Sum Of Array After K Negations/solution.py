class Solution(object):
  def largestSumAfterKNegations(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    sortedNums = sorted(nums, key = abs, reverse = True) 
    
    for index, num in enumerate(sortedNums):
      if num < 0:
        sortedNums[index] *= -1
        k -= 1
        if k == 0:
          break
    if k > 0 and k & 1 == 1:
      sortedNums[-1] *= -1

    return sum(sortedNums)