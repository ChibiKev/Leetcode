class Solution(object):
  def countTriples(self, n):
    """
    :type n: int
    :rtype: int
    """
    result = 0

    for a in range(1, n):
      for b in range(a + 1, n):
        c = sqrt((a * a) + (b * b))
        if int(c) == c and c <= n:
          result += 2
    
    return result