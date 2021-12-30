class Solution(object):
  def countWords(self, words1, words2):
    """
    :type words1: List[str]
    :type words2: List[str]
    :rtype: int
    """

    result = set()
    result2 = set()
    banned = set()
      
    for word in words1:
      if word not in result and word not in banned:
        result.add(word)
      elif word in result:
        result.remove(word)
        banned.add(word)
    banned.clear()
    for word in words2:
      if word not in result2 and word not in banned:
        result2.add(word)
      elif word in result2:
        result2.remove(word)
        banned.add(word)
        
    result = result.intersection(result2)
          
    return len(result)