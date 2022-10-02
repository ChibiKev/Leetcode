class Solution(object):
  def checkAlmostEquivalent(self, word1, word2):
    """
    :type word1: str
    :type word2: str
    :rtype: bool
    """
    dictionary = {}
    for letter in word1:
      if letter not in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
        
    for letter in word2:
      if letter not in dictionary:
        dictionary[letter] = -1
      else:
        dictionary[letter] -= 1
        
    for letter in dictionary:
      if abs(dictionary[letter]) > 3:
        return False
    
    return True