class Solution(object):
  def deleteGreatestValue(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    answer = 0
    sortedGrid = []
    for row in grid:
      sortedGrid.append(sorted(row))

    for column in range(len(sortedGrid[0])):
      maximum = 0
      for row in range(len(sortedGrid)):
        if sortedGrid[row][column] > maximum:
          maximum = sortedGrid[row][column]
      answer += maximum

    return answer