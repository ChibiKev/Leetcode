class Solution(object):
  def findTheDifference(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: str
    """
    sortedS = sorted(s)
    sortedT = sorted(t)
    
    for index in range(len(sortedS)):
      sLetter = sortedS[index]
      tLetter = sortedT[index]
      if sLetter != tLetter:
        return tLetter
      
    return sortedT[-1]