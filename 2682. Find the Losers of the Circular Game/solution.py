class Solution(object):
  def circularGameLosers(self, n, k):
    """
    :type n: int
    :type k: int
    :rtype: List[int]
    """
    visited = [False] * n

    i = 0
    visit = 0
    while visited[i % n] == False:
      visit += 1
      visited[i % n] = True
      i += visit * k
    
    result = []
    for index, value in enumerate(visited):
      if value == False:
        result.append(index + 1)
    
    return result