class Solution(object):
  def similarPairs(self, words):
    """
    :type words: List[str]
    :rtype: int
    """
    dictionary = {}
    for word in words:
      wordSortedSet = sorted(set(word))
      wordSorted = ''.join(wordSortedSet)
      if wordSorted not in dictionary:
        dictionary[wordSorted] = 1
      else:
        dictionary[wordSorted] += 1

    result = 0
    for word in dictionary:
      count = dictionary[word]
      result += (count * (count - 1)) // 2
    return result