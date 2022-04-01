class Solution(object):
  def sumOddLengthSubarrays(self, arr):
    """
    :type arr: List[int]
    :rtype: int
    """
    total = 0
    arrLength = len(arr)
    for index, num in enumerate(arr):
      totalAdded =((index + 1) * (arrLength - index) + 1) / 2
      total += totalAdded * num
    return total