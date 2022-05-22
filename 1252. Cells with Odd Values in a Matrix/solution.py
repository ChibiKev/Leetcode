class Solution(object):
  def oddCells(self, m, n, indices):
    """
    :type m: int
    :type n: int
    :type indices: List[List[int]]
    :rtype: int
    """
    rows = [0] * n
    columns = [0] * m
    for values in indices:
      columns[values[0]] ^= 1
      rows[values[1]] ^= 1
      
    count = 0
    for row in rows:
      for column in columns:
        if row ^ column:
          count += 1
          
    return count