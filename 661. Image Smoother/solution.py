class Solution(object):
  def imageSmoother(self, img):
    """
    :type img: List[List[int]]
    :rtype: List[List[int]]
    """
    rowLength = len(img)
    columnLength = len(img[0])
    result = []
    for row in range(rowLength):
      stored = []
      for column in range(columnLength):
        stored.append(img[row][column])
      result.append(stored)
    
    for row in range(rowLength):
      for column in range(columnLength):
        total = 0
        count = 0
        
        rowStart = max(row - 1, 0)
        rowEnd = min(row + 2, rowLength)
        columnStart = max(column - 1, 0)
        columnEnd = min(column + 2, columnLength)
        
        for currentRow in range(rowStart, rowEnd):
          for currentColumn in range(columnStart, columnEnd):
            total += img[currentRow][currentColumn]
            count += 1
            
        result[row][column] = total/count

    return result