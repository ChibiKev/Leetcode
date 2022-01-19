class Solution(object):
  def containsPattern(self, arr, m, k):
    """
    :type arr: List[int]
    :type m: int
    :type k: int
    :rtype: bool
    """
    for index in range(len(arr)):
      current = arr[index:index + m]
      count = 1
      nextIndex = index + m
      while current == arr[nextIndex:nextIndex + m]:
        count += 1
        nextIndex += m
        if count == k:
          return True
      
    return False