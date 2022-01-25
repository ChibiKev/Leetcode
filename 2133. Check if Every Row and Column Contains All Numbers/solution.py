class Solution(object):
  def checkValid(self, matrix):
    """
    :type matrix: List[List[int]]
    :rtype: bool
    """
    size = len(matrix)
    for row, column in zip(matrix, zip(*matrix)):
      setRow = set(row)
      setColumn = set(column)
      if len(setColumn) != size or len(setRow) != size:
        return False
    return True