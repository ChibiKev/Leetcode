class Solution(object):
  def answerQueries(self, nums, queries):
    """
    :type nums: List[int]
    :type queries: List[int]
    :rtype: List[int]
    """
    sortedNums = sorted(nums)
    total = 0
    sumList = []
    for num in sortedNums:
      total += num
      sumList.append(total)
    
    result = [0] * len(queries)
    for queriesIndex, query in enumerate(queries):
      for sumIndex, sums in enumerate(sumList):
        if sums <= query:
          result[queriesIndex] = sumIndex + 1
        
    return result