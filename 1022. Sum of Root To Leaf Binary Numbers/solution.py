# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def sumRootToLeaf(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def dfs(current, amount, binary):
      if current.left == None and current.right == None:
        amount += int(binary + str(current.val), 2)
      if current.left != None:
        amount = dfs(current.left, amount, binary + str(current.val))
      if current.right != None:
        amount = dfs(current.right, amount, binary + str(current.val))
      return amount
    
    return dfs(root, 0, "")