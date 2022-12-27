class Solution(object):
  def validPath(self, n, edges, source, destination):
    """
    :type n: int
    :type edges: List[List[int]]
    :type source: int
    :type destination: int
    :rtype: bool
    """
    dictionary = {}
    for edge in edges:
      start = edge[0]
      end = edge[1]
      if not start in dictionary:
        dictionary[start] = [end]
      else:
        dictionary[start].append(end)
      if not end in dictionary:
        dictionary[end] = [start]
      else:
        dictionary[end].append(start)
    seen = [False] * n
    
    def dfs(current):
      if current == destination:
        return True
      if not seen[current]:
        seen[current] = True
        for nextNode in dictionary[current]:
          if dfs(nextNode):
            return True
      return False
    
    return dfs(source)