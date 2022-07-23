class Solution(object):
  def canConstruct(self, ransomNote, magazine):
    """
    :type ransomNote: str
    :type magazine: str
    :rtype: bool
    """
    dictionary = {}
    for letter in magazine:
      if not letter in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
        
    for letter in ransomNote:
      if letter in dictionary and dictionary[letter] > 0:
        dictionary[letter] -= 1
      else:
        return False
      
    return True