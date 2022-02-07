class Solution(object):
  def generate(self, numRows):
    """
    :type numRows: int
    :rtype: List[List[int]]
    """
    result = [[1]]
    for number in range(1, numRows):
      last = result[-1]
      storage = [1]
      for index, lastStart in enumerate(last[:-1]):
        storage.append(lastStart + last[index + 1])
      storage.append(1)
      result.append(storage)
    return result