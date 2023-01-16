"""
# Definition for a Node.
class Node(object):
  def __init__(self, val=None, children=None):
    self.val = val
    self.children = children
"""

class Solution(object):
  def maxDepth(self, root):
    """
    :type root: Node
    :rtype: int
    """
    def dfs(current, depth):
      if current == None:
        return depth - 1
      maxDepth = depth
      for child in current.children:
        currentDepth = dfs(child, depth + 1)
        if currentDepth > maxDepth:
          maxDepth = currentDepth
      return maxDepth

    return dfs(root, 1)