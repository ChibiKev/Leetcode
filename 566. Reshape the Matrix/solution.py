class Solution(object):
  def matrixReshape(self, mat, r, c):
    """
    :type mat: List[List[int]]
    :type r: int
    :type c: int
    :rtype: List[List[int]]
    """
    matRow = len(mat)
    matLength = len(mat[0])
    if matRow * matLength != r * c:
      return mat
    
    newList = []
    stored = []
    for row in mat:
      for value in row:
        stored.append(value)
        if len(stored) == c:
          newList.append(stored)
          stored = []
    
    return newList