class Solution(object):
  def findCenter(self, edges):
    """
    :type edges: List[List[int]]
    :rtype: int
    """
    result = edges[0][1]
    if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
      result = edges[0][0]
    return result