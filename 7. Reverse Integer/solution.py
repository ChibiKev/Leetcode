class Solution(object):
  def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    negative = 1
    result = 0
    if x < 0:
      negative = -1
      x *= -1

    while x != 0:
      result = (result * 10) + (x % 10)
      x /= 10
    
    if result < -(2**31) or result > 2**31 - 1:
      return 0
    return result * negative