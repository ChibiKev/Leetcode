class Solution(object):
  def hasAlternatingBits(self, n):
    """
    :type n: int
    :rtype: bool
    """
    allOnes = n ^ (n >> 1)
    powerOfTwo = allOnes + 1
    return powerOfTwo & allOnes == 0