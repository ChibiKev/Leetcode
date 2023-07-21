class Solution(object):
  def isFascinating(self, n):
    """
    :type n: int
    :rtype: bool
    """
    timesTwo = n * 2
    timesThree = n * 3
    concat = str(n) + str(timesTwo) + str(timesThree)
    concatSet = set(concat)
    return (len(concatSet) == 9) and (len(concat) == 9) and ('0' not in concatSet)