class Solution(object):
  def closetTarget(self, words, target, startIndex):
    """
    :type words: List[str]
    :type target: str
    :type startIndex: int
    :rtype: int
    """
    shortestDistance = -1
    for index, word in enumerate(words):
      if word == target:
        distance = abs(index - startIndex)
        distance2 = len(words) - abs(index - startIndex)
        if shortestDistance > distance or shortestDistance == -1:
          shortestDistance = distance
        if shortestDistance > distance2:
          shortestDistance = distance2

    return shortestDistance