class Solution(object):
  def minDeletionSize(self, strs):
    """
    :type strs: List[str]
    :rtype: int
    """
    sizeOfRow = len(strs)
    sizeOfColumn = len(strs[0])
    
    count = 0
    
    for column in range(sizeOfColumn):
      for row in range(sizeOfRow - 1):
        if strs[row][column] > strs[row + 1][column]:
          count += 1
          break
          
    return count