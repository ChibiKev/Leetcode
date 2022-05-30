class Solution(object):
  def diagonalSum(self, mat):
    """
    :type mat: List[List[int]]
    :rtype: int
    """
    total = 0
    for index in range(len(mat)):
      total += mat[index][index]
      total += mat[index][len(mat) - index - 1]
    if len(mat) % 2 == 1:
      mid = len(mat) / 2
      total -= mat[mid][mid]
    return total