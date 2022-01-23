class Solution(object):
  def maxDistance(self, colors):
    """
    :type colors: List[int]
    :rtype: int
    """
    furthestFromStart = len(colors) - 1
    furthestFromEnd = 0
    while colors[furthestFromStart] == colors[0]:
      furthestFromStart -= 1
    while colors[furthestFromEnd] == colors[-1]:
      furthestFromEnd += 1
    
    return max(len(colors) - 1 - furthestFromEnd, furthestFromStart)