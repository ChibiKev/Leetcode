class Solution(object):
  def canMakeArithmeticProgression(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    arr.sort()
    difference = arr[1] - arr[0]
    
    for index, value in enumerate(arr[:-1]):
      nextValue = arr[index + 1]
      if nextValue - value != difference:
        return False
    
    return True