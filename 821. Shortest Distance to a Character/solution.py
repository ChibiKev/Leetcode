class Solution(object):
  def shortestToChar(self, s, c):
    """
    :type s: str
    :type c: str
    :rtype: List[int]
    """
    occurances = []
    for index, character in enumerate(s):
      if character == c:
        occurances.append(index)
    left = 0
    right = 0
    output = []
    for index, character in enumerate(s):
      if index > occurances[right]:
        left = right
        if right < len(occurances) - 1:
          right += 1
      distanceFromLeft = abs(index - occurances[left])
      distanceFromRight = abs(index - occurances[right])
      distance = min(distanceFromLeft, distanceFromRight)
      output.append(distance)
    return output
