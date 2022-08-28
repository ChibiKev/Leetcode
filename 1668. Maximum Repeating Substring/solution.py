class Solution(object):
  def maxRepeating(self, sequence, word):
    """
    :type sequence: str
    :type word: str
    :rtype: int
    """
    count = 0
    maxCount = 0
    index = 0
    while index < len(sequence):
      if sequence[index:index + len(word)] == word:
        count += 1
        index += len(word)
        if count > maxCount:
          maxCount = count
      else:
        index += 1
        count = 0
    
    index = len(sequence)
    count = 0
    
    while index > -1:
      if sequence[index - len(word):index] == word:
        count += 1
        index -= len(word)
        if count > maxCount:
          maxCount = count
      else:
        index -= 1
        count = 0
        
    return maxCount