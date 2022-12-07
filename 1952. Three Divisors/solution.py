class Solution(object):
  def isThree(self, n):
    """
    :type n: int
    :rtype: bool
    """
    count = 2
    for index in range(2, n):
      if n % index == 0:
        count += 1
    return count == 3