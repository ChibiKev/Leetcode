class Solution(object):
  def removeAnagrams(self, words):
    """
    :type words: List[str]
    :rtype: List[str]
    """
    newWords = []
    for word in words:
      newWords.append(sorted(word))
      
    result = [words[0]]
    for index, word in enumerate(newWords[1:]):
      if word != newWords[index]:
        result.append(words[index + 1])
        
    return result