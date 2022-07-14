class Solution(object):
  def mergeAlternately(self, word1, word2):
    """
    :type word1: str
    :type word2: str
    :rtype: str
    """
    result = ""
    word1Index = 0
    word2Index = 0
    while word1Index < len(word1) or word2Index < len(word2):
      if word1Index < len(word1):
        result += word1[word1Index]
      if word2Index < len(word2):
        result += word2[word2Index]
      word1Index += 1
      word2Index += 1
      
    return result