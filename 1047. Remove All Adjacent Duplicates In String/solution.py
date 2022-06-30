class Solution(object):
  def removeDuplicates(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = s[0]
    for letter in s[1:]:
      if len(result) > 0 and letter == result[-1]:
        result = result[:-1]
      else:
        result += letter
    return result