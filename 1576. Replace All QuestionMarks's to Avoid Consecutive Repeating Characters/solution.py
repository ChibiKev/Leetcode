class Solution(object):
  def modifyString(self, s):
    """
    :type s: str
    :rtype: str
    """
    for index in range(len(s)):
      if s[index] == "?":
        for character in "abc":
          if (index == 0 or s[index - 1] != character) and (index + 1 == len(s) or s[index + 1] != character):
            s = s[:index] + character + s[index + 1:]
            break
    return s