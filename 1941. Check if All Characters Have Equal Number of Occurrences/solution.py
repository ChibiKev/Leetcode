class Solution(object):
  def areOccurrencesEqual(self, s):
    """
    :type s: str
    :rtype: bool
    """
    dictionary = {}
    for letter in s:
      if letter not in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
    
    amount = dictionary[s[0]]
    for letter in dictionary:
      if dictionary[letter] != amount:
        return False
      
    return True