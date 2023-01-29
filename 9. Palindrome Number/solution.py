class Solution(object):
  def isPalindrome(self, x):
    """
    :type x: int
    :rtype: bool
    """
    if x < 0:
      return False
    
    reverseX = 0
    xCopy = x
    while xCopy > 0:
      lastDigit = xCopy % 10
      reverseX = reverseX * 10 + lastDigit
      xCopy /= 10
    return x == reverseX