class Solution(object):
  def captureForts(self, forts):
    """
    :type forts: List[int]
    :rtype: int
    """
    result = 0
    startingPosition = -1
    for index, fort in enumerate(forts):
      if fort == 1:
        startingPosition = index
      elif fort == -1 and startingPosition != -1:
        distance = index - startingPosition - 1
        startingPosition = -1
        if distance > result:
          result = distance
    
    startingPosition = -1
    for index, fort in enumerate(forts[::-1]):
      if fort == 1:
        startingPosition = index
      elif fort == -1 and startingPosition != -1:
        distance = index - startingPosition - 1
        startingPosition = -1
        if distance > result:
          result = distance

    return result