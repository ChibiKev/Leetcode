class Solution(object):
  def sortString(self, s):
    """
    :type s: str
    :rtype: str
    """
    dictionary = {}
    for letter in s:
      if letter not in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
        
    result = ""
    while len(result) != len(s):
      for letter in sorted(dictionary.keys()):
        if dictionary[letter] > 0:
          result += letter
          dictionary[letter] -= 1
      for letter in sorted(dictionary.keys(), reverse = True):
        if dictionary[letter] > 0:
          result += letter
          dictionary[letter] -= 1
    
    return result