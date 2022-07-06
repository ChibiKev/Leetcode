class Solution(object):
  def isAnagram(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    if len(s) != len(t):
      return False
    
    dictionary = {}
    for letter in s:
      if not letter in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
        
    for letter in t:
      if not letter in dictionary:
        return False
      else:
        if dictionary[letter] > 0:
          dictionary[letter] -= 1
        else:
          return False
    return True