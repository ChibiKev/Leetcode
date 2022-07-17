class Solution(object):
  def titleToNumber(self, columnTitle):
    """
    :type columnTitle: str
    :rtype: int
    """
    result = 0
    for index in range(len(columnTitle) - 1, -1, -1):
      letter = columnTitle[index]
      value = ord(letter) - 64
      result += value * 26**(len(columnTitle) - index - 1)

    return result