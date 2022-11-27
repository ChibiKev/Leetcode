class Solution(object):
  def sumBase(self, n, k):
    """
    :type n: int
    :type k: int
    :rtype: int
    """
    num = 0
    while n:
      num += n % k
      n /= k

    return num