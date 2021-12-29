class Solution(object):
  def commonChars(self, words):
    """
    :type words: List[str]
    :rtype: List[str]
    """
    result = []
    for index, word in enumerate(words):
      currentSplit = list(word)
      if index == 0:
        result = currentSplit
        continue
          
      if len(result) == 0:
        break
          
      newResult = []
      for letter in result:
        if letter in currentSplit:
          newResult.append(letter)
          currentSplit.remove(letter)
              
      result = newResult
    return result