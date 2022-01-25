class Solution(object):
  def construct2DArray(self, original, m, n):
    """
    :type original: List[int]
    :type m: int
    :type n: int
    :rtype: List[List[int]]
    """
    if m * n != len(original):
      return []
    
    result = []
    
    for row in range(m):
      start = row * n
      end = (row * n) + n
      result.append(original[start:end])
        
    return result