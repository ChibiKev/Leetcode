class Solution(object):
  def xorOperation(self, n, start):
    """
    :type n: int
    :type start: int
    :rtype: int
    """
    result = start
    for index in range(1, n):
      value = start + 2 * index
      result ^= value
    return result