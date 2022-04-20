class Solution(object):
  def replaceElements(self, arr):
    """
    :type arr: List[int]
    :rtype: List[int]
    """
    largest = -1
    for index in range(len(arr) - 1, -1, -1):
      current = arr[index]
      arr[index] = largest
      if current > largest:
        largest = current
        
    return arr