class Solution(object):
  def findRotation(self, mat, target):
    """
    :type mat: List[List[int]]
    :type target: List[List[int]]
    :rtype: bool
    """
    check = [True] * 4
    matLength = len(mat)
    for row in range(matLength):
      for column in range(matLength):
        if mat[row][column] != target[row][column]:
          check[0] = False
        if mat[row][column] != target[matLength - column - 1][row]:
          check[1] = False
        if mat[row][column] != target[matLength - row - 1][matLength - column - 1]:
          check[2] = False
        if mat[row][column] != target[column][matLength - row - 1]:
          check[3] = False
    return check[0] or check[1] or check[2] or check[3]