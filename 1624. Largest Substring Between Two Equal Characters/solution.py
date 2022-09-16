class Solution(object):
  def maxLengthBetweenEqualCharacters(self, s):
    """
    :type s: str
    :rtype: int
    """
    letters = [0] * 26
    maxCount = -1
    for index, letter in enumerate(s):
      letterIndex = ord(letter) - 97
      if (letters[letterIndex] > 0):
        if maxCount < index - letters[letterIndex]:
          maxCount = index - letters[letterIndex]
      else:
        letters[letterIndex] = index + 1
    
    return maxCount