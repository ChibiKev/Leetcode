class Solution(object):
  def findSpecialInteger(self, arr):
    """
    :type arr: List[int]
    :rtype: int
    """
    arrLength = len(arr)
    split = arrLength / 4

    for index in range(arrLength - split):
      current = arr[index]
      end = arr[index + split]
      if current == end:
        return current