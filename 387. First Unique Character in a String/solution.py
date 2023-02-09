class Solution(object):
  def firstUniqChar(self, s):
    """
    :type s: str
    :rtype: int
    """
    dictionary = {}
    for letter in s:
      if letter not in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1

    for index, letter in enumerate(s):
      if dictionary[letter] == 1:
        return index

    return -1