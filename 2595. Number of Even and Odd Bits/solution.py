class Solution(object):
  def evenOddBit(self, n):
    """
    :type n: int
    :rtype: List[int]
    """
    even = 0
    odd = 0
    for index in range(32):
      if n & (1 << index):
        if index % 2 == 0:
          even += 1
        else:
          odd += 1
    return [even, odd]