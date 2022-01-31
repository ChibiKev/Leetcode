class Solution(object):
  def findRelativeRanks(self, score):
    """
    :type score: List[int]
    :rtype: List[str]
    """
    myDict = {}
    for index, number in enumerate(score):
      myDict[number] = index
    
    count = len(score)
    result = [""] * count
    
    for key in sorted(myDict):
      if count == 3:
        result[myDict[key]] = "Bronze Medal"
      elif count == 2:
        result[myDict[key]] = "Silver Medal"
      elif count == 1:
        result[myDict[key]] = "Gold Medal"
      else:
        result[myDict[key]] = str(count)
      count -= 1
      
    return result