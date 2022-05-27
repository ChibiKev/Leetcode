class Solution(object):
  def luckyNumbers (self, matrix):
    """
    :type matrix: List[List[int]]
    :rtype: List[int]
    """
    rows = [1000000] * len(matrix)
    columns = [0] * len(matrix[0])
    for i in range(len(matrix)):
      for j in range(len(matrix[i])):
        if matrix[i][j] < rows[i]:
          rows[i] = matrix[i][j]
        if matrix[i][j] > columns[j]:
          columns[j] = matrix[i][j]
          
    for row in rows:
      for column in columns:
        if row == column:
          return [row]
    return []