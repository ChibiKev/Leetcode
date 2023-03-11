class Solution(object):
  def isCircularSentence(self, sentence):
    """
    :type sentence: str
    :rtype: bool
    """
    words = sentence.split()
    for index, word in enumerate(words):
      lastLetter = word[-1]
      firstLetter = words[(index + 1) % len(words)][0]
      if lastLetter != firstLetter:
        return False
    
    return True