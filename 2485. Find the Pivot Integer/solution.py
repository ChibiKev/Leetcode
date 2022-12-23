class Solution(object):
  def pivotInteger(self, n):
    """
    :type n: int
    :rtype: int
    """
    totalSum = n * (n + 1) // 2
    for index in range(1, n + 1):
      if index * (index + 1) == totalSum + index:
        return index
    return -1