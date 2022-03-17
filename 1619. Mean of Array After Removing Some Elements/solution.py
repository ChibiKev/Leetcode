class Solution(object):
  def trimMean(self, arr):
    """
    :type arr: List[int]
    :rtype: float
    """
    fivePercent = len(arr) / 20
    adjustedArr = sorted(arr)
    adjustedArr = adjustedArr[fivePercent:-fivePercent]
    totalSum = float(0)
    for num in adjustedArr:
      totalSum += num
      
    return totalSum / len(adjustedArr)