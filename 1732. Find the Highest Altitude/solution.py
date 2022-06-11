class Solution(object):
  def largestAltitude(self, gain):
    """
    :type gain: List[int]
    :rtype: int
    """
    altitude = 0
    highest = 0
    for value in gain:
      altitude += value
      if altitude > highest:
        highest = altitude
        
    return highest