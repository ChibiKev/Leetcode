class Solution(object):
  def findMaxAverage(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: float
    """
    maxSum = float(0)
    for num in nums[:k]:
      maxSum += num
      
    totalSum = maxSum
    for index, num in enumerate(nums[k:]):
      totalSum += num - nums[k - k + index] 
      if totalSum > maxSum:
        maxSum = totalSum
        
    average = maxSum / k
    return average