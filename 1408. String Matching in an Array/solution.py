class Solution(object):
  def stringMatching(self, words):
    """
    :type words: List[str]
    :rtype: List[str]
    """
    words.sort(key = len)
    result = []
    for index in range(len(words)):
      for index2 in range(index + 1, len(words)):
        if words[index] in words[index2]:
          result.append(words[index])
          break
          
    return result