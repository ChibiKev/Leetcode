"""
# Definition for a Node.
class Node(object):
  def __init__(self, val=None, children=None):
    self.val = val
    self.children = children
"""

class Solution(object):
  def preorder(self, root):
    """
    :type root: Node
    :rtype: List[int]
    """
    result = []
    
    def dfs(current, array):
      if current == None:
        return
      array.append(current.val)
      for child in current.children:
        dfs(child, array)
    
    dfs(root, result)
    return result