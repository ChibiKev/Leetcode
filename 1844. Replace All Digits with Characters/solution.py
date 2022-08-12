class Solution(object):
  def replaceDigits(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = ""
    for index, value in enumerate(s):
      if index % 2 == 0:
        result += value
      else:
        result += chr(ord(s[index - 1]) + int(value))
        
    return result