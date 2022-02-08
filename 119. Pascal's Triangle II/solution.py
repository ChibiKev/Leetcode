class Solution(object):
  def getRow(self, rowIndex):
    """
    :type rowIndex: int
    :rtype: List[int]
    """
    current = [1]
    for iternation in range(rowIndex):
      storage = [1]
      for index, number in enumerate(current[:-1]):
        storage.append(number + current[index + 1])
      storage.append(1)
      current = storage
      
    return current