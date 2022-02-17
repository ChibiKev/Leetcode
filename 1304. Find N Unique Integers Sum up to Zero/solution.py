class Solution(object):
  def sumZero(self, n):
    """
    :type n: int
    :rtype: List[int]
    """
    result = []
    value = n/2
    if n % 2 == 1:
      result.append(0)
    for number in range(1, value + 1):
      result.append(-number)
      result.append(number)
    return result