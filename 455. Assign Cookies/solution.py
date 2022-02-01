class Solution(object):
  def findContentChildren(self, g, s):
    """
    :type g: List[int]
    :type s: List[int]
    :rtype: int
    """
    g.sort(reverse=False)
    s.sort(reverse=False)
    childrenIndex = 0
    count = 0
    for cookies in s:
      if childrenIndex >= len(g):
        break
      if g[childrenIndex] <= cookies:
        count += 1
        childrenIndex += 1
        
    return count