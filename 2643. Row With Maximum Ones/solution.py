class Solution(object):
  def rowAndMaximumOnes(self, mat):
    """
    :type mat: List[List[int]]
    :rtype: List[int]
    """
    result = [0, 0]
    for row in range(len(mat)):
      count = 0
      for column in range(len(mat[row])):
        if mat[row][column] == 1:
          count += 1
      if count > result[1]:
        result = [row, count]
    return result