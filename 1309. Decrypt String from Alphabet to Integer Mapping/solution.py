class Solution(object):
  def freqAlphabets(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = ""
    index = len(s) - 1
    while index > -1:
      if s[index] == '#':
        letter = chr(int(s[index - 2:index]) + 96)
        result += letter
        index -= 2
      else:
        letter = chr(int(s[index]) + 96)
        result += letter
      index -= 1
    
    return result[::-1]