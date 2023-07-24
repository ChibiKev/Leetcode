class Solution(object):
  def maximumNumberOfStringPairs(self, words):
    """
    :type words: List[str]
    :rtype: int
    """
    mySet = set()
    count = 0

    for word in words:
      if word in mySet:
        count += 1
      else:
        mySet.add(word[::-1])

    return count