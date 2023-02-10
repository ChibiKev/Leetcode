class Solution(object):
  def selfDividingNumbers(self, left, right):
    """
    :type left: int
    :type right: int
    :rtype: List[int]
    """
    result = []
    for value in range(left, right + 1):
      number = value
      divisible = True
      while number != 0:
        digit = number % 10
        if digit == 0 or value % digit != 0:
          divisible = False
          break
        number /= 10
      if divisible:
        result.append(value)
    
    return result