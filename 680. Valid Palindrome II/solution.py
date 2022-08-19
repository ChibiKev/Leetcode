class Solution(object):
  def validPalindrome(self, s):
    """
    :type s: str
    :rtype: bool
    """
    start = 0
    end = len(s) - 1
    
    while start < end:
      if s[start] != s[end]:
        firstCheck = s[start:end]
        secondCheck = s[start + 1:end + 1]
        return firstCheck == firstCheck[::-1] or secondCheck == secondCheck[::-1]
      start += 1
      end -= 1
    
    return True