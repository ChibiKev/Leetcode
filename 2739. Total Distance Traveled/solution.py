class Solution(object):
  def distanceTraveled(self, mainTank, additionalTank):
    """
    :type mainTank: int
    :type additionalTank: int
    :rtype: int
    """
    return (mainTank + min((mainTank - 1) / 4, additionalTank)) * 10