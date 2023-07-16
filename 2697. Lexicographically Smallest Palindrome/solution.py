class Solution(object):
  def makeSmallestPalindrome(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = list(s)
    for index in range(len(result) / 2):
      left = result[index]
      right = result[len(result) - 1 - index]
      if left < right:
        result[len(result) - 1 - index] = left
      elif right < left:
        result[index] = right
    return ''.join(result)