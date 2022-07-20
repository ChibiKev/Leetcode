class Solution(object):
  def largeGroupPositions(self, s):
    """
    :type s: str
    :rtype: List[List[int]]
    """
    result = []
    
    count = 0
    lastLetter = ''
    startIndex = 0
    
    for index, letter in enumerate(s):
      if lastLetter == letter:
        count += 1
        if count >= 3 and index == len(s) - 1:
            result.append([startIndex, index])
      else:
        if count >= 3:
          result.append([startIndex, index - 1])
        lastLetter = letter
        count = 1
        startIndex = index
        
    return result