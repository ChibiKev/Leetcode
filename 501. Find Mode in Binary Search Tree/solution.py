# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def findMode(self, root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    self.value = None
    self.count = 1
    self.maxCount = 0
    result = []

    def dfs(current, storage):
      if current == None:
        return storage
      storage = dfs(current.left, storage)
      if self.value == current.val:
        self.count += 1
      else:
        self.count = 1
      self.value = current.val
      if self.count > self.maxCount:
        self.maxCount = self.count
        storage = [current.val]
      elif self.count == self.maxCount:
        storage.append(current.val)
      storage = dfs(current.right, storage)
      return storage
    
    return dfs(root, result)