class Solution(object):
  def kWeakestRows(self, mat, k):
    """
    :type mat: List[List[int]]
    :type k: int
    :rtype: List[int]
    """
    maxRows = len(mat)
    maxColumns = len(mat[0])
    
    result = []
    
    for columns in range(maxColumns):
      for rows in range(maxRows):
        if rows in result:
          continue
        if mat[rows][columns] == 0:
          result.append(rows)
          if len(result) == k:
            return result
    
    if len(result) != k:
      for rows in range(maxRows):
        if rows in result:
          continue
        result.append(rows)
        if len(result) == k:
          return result