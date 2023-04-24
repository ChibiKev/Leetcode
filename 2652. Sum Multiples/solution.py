class Solution(object):
  def sumOfMultiples(self, n):
    """
    :type n: int
    :rtype: int
    """
    total = 0
    for index in range(1, n + 1):
      if index % 3 == 0 or index % 5 == 0 or index % 7 == 0:
        total += index
    return total