class Solution(object):
  def countConsistentStrings(self, allowed, words):
    """
    :type allowed: str
    :type words: List[str]
    :rtype: int
    """
    allowedWords = set(allowed)
    count = len(words)
    
    for word in words:
      for letter in word:
        if letter not in allowedWords:
          count -= 1
          break

    return count