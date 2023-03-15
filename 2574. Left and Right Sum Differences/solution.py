class Solution(object):
  def leftRigthDifference(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    left = 0
    total = 0
    for num in nums:
      total += num
    
    answer = []
    for num in nums:
      total -= num
      resultingSum = abs(left - total)
      answer.append(resultingSum)
      left += num
    
    return answer