# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def averageOfLevels(self, root):
    """
    :type root: TreeNode
    :rtype: List[float]
    """
    def bfs(start):
      myQueue = [start]
      result = []
      while myQueue:
        total = 0
        count = 0
        newQueue = []
        for index in range(len(myQueue)):
          current = myQueue[index]
          if current != None:
            total += current.val
            count += 1
          if current.left != None:
            newQueue.append(current.left)
          if current.right != None:
            newQueue.append(current.right)
        average = float(total) / float(count)
        result.append(average)
        myQueue = newQueue
      return result
    
    return bfs(root)