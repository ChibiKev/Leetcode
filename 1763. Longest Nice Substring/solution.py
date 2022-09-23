class Solution(object):
  def longestNiceSubstring(self, s):
    """
    :type s: str
    :rtype: str
    """
    if len(s) < 2:
      return ""
    
    mySet = set(list(s))
    
    for index in range(len(s)):
      if not (s[index].lower() in mySet and s[index].upper() in mySet):
        s1 = self.longestNiceSubstring(s[:index])
        s2 = self.longestNiceSubstring(s[index + 1:])
        if len(s2) > len(s1):
          return s2
        else:
          return s1
    
    return s