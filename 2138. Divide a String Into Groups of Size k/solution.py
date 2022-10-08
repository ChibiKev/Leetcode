class Solution(object):
  def divideString(self, s, k, fill):
    """
    :type s: str
    :type k: int
    :type fill: str
    :rtype: List[str]
    """
    result = []
    word = ""
    for letter in s:
      word += letter
      if len(word) == k:
        result.append(word)
        word = ""
    if len(word) != 0:
      for index in range(len(word), k):
        word += fill
        if len(word) == k:
          result.append(word)

    return result