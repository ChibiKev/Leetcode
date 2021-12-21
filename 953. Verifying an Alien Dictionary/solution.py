class Solution(object):
  def isAlienSorted(self, words, order):
    """
    :type words: List[str]
    :type order: str
    :rtype: bool
    """
    for index, word in enumerate(words):
      if index == len(words) - 1:
        break
      currentWord = word
      nextWord = words[index + 1]
      for wordIndex in range(len(word)):
        currentWordLetter = currentWord[wordIndex]
        currentWordValue = order.find(currentWordLetter)
        nextWordValue = -1
        if wordIndex < len(nextWord):
          nextWordLetter = nextWord[wordIndex]
          nextWordValue = order.find(nextWordLetter)
        if currentWordValue < nextWordValue:
          break
        elif currentWordValue == nextWordValue:
          continue
        else:
          return False
          
    return True
          