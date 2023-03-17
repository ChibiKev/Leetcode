class Solution(object):
  def passThePillow(self, n, time):
    """
    :type n: int
    :type time: int
    :rtype: int
    """
    totalTimeOnePass = n - 1
    totalPasses = time / totalTimeOnePass
    personIndex = time % totalTimeOnePass
    if totalPasses % 2 == 0:
      return personIndex + 1
    return n - personIndex