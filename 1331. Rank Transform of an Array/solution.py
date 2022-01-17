class Solution(object):
  def arrayRankTransform(self, arr):
    """
    :type arr: List[int]
    :rtype: List[int]
    """
    sortedArray = sorted(arr)
    myDict = {}
    rank = 1
    result = []
    
    for value in sortedArray:
      if value not in myDict:
        myDict[value] = rank
        rank += 1
    
    for value in arr:
      result.append(myDict[value])
      
    return result