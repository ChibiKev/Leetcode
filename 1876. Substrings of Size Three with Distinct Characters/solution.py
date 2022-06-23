class Solution(object):
  def countGoodSubstrings(self, s):
    """
    :type s: str
    :rtype: int
    """
    if len(s) < 3:
      return 0
    
    count = 0
    letters = s[:2]
    for index in range(2, len(s)):
      letters += s[index]
      if letters[0] != letters[1] and letters[1] != letters[2] and letters[2] != letters[0]:
        count += 1
      letters = letters[1:]
      
    return count