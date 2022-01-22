class Solution(object):
  def canFormArray(self, arr, pieces):
    """
    :type arr: List[int]
    :type pieces: List[List[int]]
    :rtype: bool
    """
    index = 0
    nextIndex = 1
    result = False
    while index < len(arr) and nextIndex < len(arr) + 1:
      value = arr[index:nextIndex]
      if value in pieces:
        result = True
        index = nextIndex
        nextIndex = index + 1
      else:
        result = False
        nextIndex += 1
    
    return result