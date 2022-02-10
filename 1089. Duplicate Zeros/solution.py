class Solution(object):
  def duplicateZeros(self, arr):
    """
    :type arr: List[int]
    :rtype: None Do not return anything, modify arr in-place instead.
    """
    totalZeros = 0
    for number in arr:
      if number == 0:
        totalZeros += 1
    
    for index, number in enumerate(reversed(arr)):
      if totalZeros < index + 1:
        arr[len(arr) - 1 - index + totalZeros] = number
      if number == 0: 
        totalZeros -= 1
        if totalZeros < index + 1:
          arr[len(arr) - 1 - index + totalZeros] = 0