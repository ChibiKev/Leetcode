class Solution(object):
  def splitWordsBySeparator(self, words, separator):
    """
    :type words: List[str]
    :type separator: str
    :rtype: List[str]
    """
    result = []
    for word in words:
      splitWord = word.split(separator)
      for split in splitWord:
        if len(split) != 0:
          result.append(split)
    return result