class Solution(object):
  def flipAndInvertImage(self, image):
    """
    :type image: List[List[int]]
    :rtype: List[List[int]]
    """
    result = []
    for row in range(len(image)):
      reversedRow = []
      for column in range(len(image[row]) - 1, -1, -1):
        number = 0
        if image[row][column] == 0:
          number = 1
        reversedRow.append(number)
      result.append(reversedRow)
      
    return result