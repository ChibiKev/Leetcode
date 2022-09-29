class Solution(object):
  def makeEqual(self, words):
    """
    :type words: List[str]
    :rtype: bool
    """
    dictionary = {}
    for word in words:
      for letter in word:
        if not letter in dictionary:
          dictionary[letter] = 1
        else:
          dictionary[letter] += 1
          
    for letter in dictionary:
      if dictionary[letter] % len(words) != 0:
        return False
      
    return True