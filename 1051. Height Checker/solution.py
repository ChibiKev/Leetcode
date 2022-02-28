class Solution(object):
  def heightChecker(self, heights):
    """
    :type heights: List[int]
    :rtype: int
    """
    sortedHeights = sorted(heights)
    result = 0
    for index in range(len(heights)):
      if sortedHeights[index] != heights[index]:
        result += 1
    return result