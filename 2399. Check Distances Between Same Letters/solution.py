class Solution(object):
  def checkDistances(self, s, distance):
    """
    :type s: str
    :type distance: List[int]
    :rtype: bool
    """
    for index, letter in enumerate(s):
      letterIndex = ord(letter) - 97
      distanceValue = distance[letterIndex]
      nextValue = index + distanceValue + 1
      if len(s) <= nextValue:
        return False
      if letter == s[nextValue]:
        distance[letterIndex] = -1
      elif distance[letterIndex] != -1:
        return False
    return True