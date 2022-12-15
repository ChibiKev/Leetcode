class Solution(object):
  def constructRectangle(self, area):
    """
    :type area: int
    :rtype: List[int]
    """
    width = int(sqrt(area))
    while area % width != 0:
      width -= 1
    
    return [area / width, width]