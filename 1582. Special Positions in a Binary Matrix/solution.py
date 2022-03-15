class Solution(object):
  def numSpecial(self, mat):
    """
    :type mat: List[List[int]]
    :rtype: int
    """
    rowAmount = [0] * len(mat[0])
    columnAmount = [0] * len(mat)
    
    for row in range(len(mat)):
      for column in range(len(mat[row])):
        value = mat[row][column]
        rowAmount[column] += value
        columnAmount[row] += value
        
    result = 0
    for row in range(len(mat)):
      for column in range(len(mat[row])):
        value = mat[row][column]
        if value == 1 and rowAmount[column] == 1 and columnAmount[row] == 1:
          result += 1
          
    return result