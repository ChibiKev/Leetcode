class Solution(object):
  def hammingWeight(self, n):
    """
    :type n: int
    :rtype: int
    """
    total = 0
    while n != 0:
      total += n & 1
      n = n >> 1
    return total