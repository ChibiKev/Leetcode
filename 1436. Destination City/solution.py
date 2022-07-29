class Solution(object):
  def destCity(self, paths):
    """
    :type paths: List[List[str]]
    :rtype: str
    """
    pathsSet = set()
    for path in paths:
      pathsSet.add(path[0])
      
    for path in paths:
      if path[1] not in pathsSet:
        return path[1]
    return ""