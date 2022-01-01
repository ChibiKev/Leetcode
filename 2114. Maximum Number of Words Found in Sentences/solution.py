class Solution(object):
  def mostWordsFound(self, sentences):
    """
    :type sentences: List[str]
    :rtype: int
    """
    max = 0
    for sentence in sentences:
      amountOfSpaces = sentence.count(" ")
      if amountOfSpaces + 1 > max:
        max = amountOfSpaces + 1
    return max