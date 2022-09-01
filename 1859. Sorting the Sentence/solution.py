class Solution(object):
  def sortSentence(self, s):
    """
    :type s: str
    :rtype: str
    """
    sList = s.split()
    result = [""] * len(sList)
    
    for word in sList:
      index = int(word[-1]) - 1
      result[index] = word[:-1]
    
    return ' '.join(result)