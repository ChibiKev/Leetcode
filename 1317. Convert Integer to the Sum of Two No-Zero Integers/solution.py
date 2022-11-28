class Solution(object):
  def getNoZeroIntegers(self, n):
    """
    :type n: int
    :rtype: List[int]
    """
    for index in range(1, (n/2) + 1):
      firstFound = False
      firstValue = index
      while firstValue > 0:
        if firstValue % 10 == 0:
          firstFound = True
          break
        firstValue /= 10
      
      secondFound = False
      secondValue = n - index
      while secondValue > 0:
        if secondValue % 10 == 0:
          secondFound = True
          break
        secondValue /= 10
      
      if not firstFound and not secondFound:
        return [index, n - index]
    return []