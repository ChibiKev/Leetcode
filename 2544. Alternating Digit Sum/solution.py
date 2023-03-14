class Solution(object):
  def alternateDigitSum(self, n):
    """
    :type n: int
    :rtype: int
    """
    result = 0
    nString = str(n)
    for index, digit in enumerate(nString):
      if index % 2 == 0:
        result += int(digit)
      else:
        result -= int(digit)
    return result