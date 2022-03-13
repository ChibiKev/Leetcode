class Solution(object):
  def transpose(self, matrix):
    """
    :type matrix: List[List[int]]
    :rtype: List[List[int]]
    """
    result = []
    for column in range(len(matrix[0])):
      newRow = []
      for row in range(len(matrix)):
        newRow.append(matrix[row][column])
      result.append(newRow)
    return result