class Solution(object):
  def countBits(self, n):
    """
    :type n: int
    :rtype: List[int]
    """
    result = []
    for index in range(n + 1):
      total = 0
      num = index
      
      while num != 0:
        total += num % 2
        num /= 2
      result.append(total)

    return result