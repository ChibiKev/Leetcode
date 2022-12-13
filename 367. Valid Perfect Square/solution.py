class Solution(object):
  def isPerfectSquare(self, num):
    """
    :type num: int
    :rtype: bool
    """
    if num == 1:
      return True
    
    left = 1
    middle = num // 2
    right = num
    
    while left <= right:
      squareroot = float(num) / float(middle)
      if squareroot == middle:
        return True
      elif squareroot > middle:
        left = middle + 1
      elif squareroot < middle:
        right = middle - 1
      middle = left + ((right - left) // 2)

    return False