class Solution(object):
  def binaryGap(self, n):
    """
    :type n: int
    :rtype: int
    """
    lastOne = 32
    result = 0
    for index in range(32):
      if n & (1 << index):
        if index - lastOne > result:
          result = index - lastOne
        lastOne = index
    return result