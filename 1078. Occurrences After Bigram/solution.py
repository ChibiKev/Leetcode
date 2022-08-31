class Solution(object):
  def findOcurrences(self, text, first, second):
    """
    :type text: str
    :type first: str
    :type second: str
    :rtype: List[str]
    """
    words = text.split()
    result = []
    index = 0
    
    while index + 2 < len(words):
      if words[index] == first:
        if words[index + 1] == second:
          result.append(words[index + 2])
          if words[index + 1] == first and words[index + 2] == second:
            index += 0
          elif words[index + 2] == first:
            index += 1
          else:
            index += 2
      index += 1
        
    return result