class Solution(object):
  def isPowerOfThree(self, n):
    """
    :type n: int
    :rtype: bool
    """
    return n > 0 and (log10(n) / log10(3)) == int(log10(n) / log10(3))