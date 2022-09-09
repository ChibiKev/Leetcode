class Solution(object):
  def minTimeToType(self, word):
    """
    :type word: str
    :rtype: int
    """
    result = len(word)
    point = 'a'
    
    for letter in word:
      minimum = abs((ord(point) - 97) - (ord(letter) - 97))
      if 26 - abs((ord(point) - 97) - (ord(letter) - 97)) < minimum:
        minimum = 26 - abs((ord(point) - 97) - (ord(letter) - 97))
      result += minimum
      point = letter
    
    return result