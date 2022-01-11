class Solution(object):
  def findKthPositive(self, arr, k):
    """
    :type arr: List[int]
    :type k: int
    :rtype: int
    """
    amountMissing = 0
    storedNumber = arr[-1] + 1
    lastNumber = 0
    for index, number in enumerate(arr):
      difference = number - lastNumber
      
      if difference != 1:
        amountMissing += difference - 1
        
      if amountMissing >= k:
        storedNumber = number
        break
        
      lastNumber = number
    
    amountMissing = k - amountMissing - 1
    return storedNumber + amountMissing