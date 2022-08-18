class Solution(object):
  def halvesAreAlike(self, s):
    """
    :type s: str
    :rtype: bool
    """
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    
    a = 0
    b = 0
    
    for index in range(len(s) / 2):
      if s[index] in vowels:
        a += 1
      if s[index + len(s) / 2] in vowels:
        b += 1
        
    return a == b