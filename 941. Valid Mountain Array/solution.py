class Solution(object):
  def validMountainArray(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    increasing = False
    decreasing = False
    for index, num in enumerate(arr[1:]):
      if arr[index] < num and decreasing == False:
        increasing = True
      elif arr[index] > num and increasing == True:
        decreasing = True
      else:
        return False
    if increasing and decreasing:
      return True
    return False