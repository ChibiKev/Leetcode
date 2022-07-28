class Solution(object):
  def longestPalindrome(self, s):
    """
    :type s: str
    :rtype: int
    """
    dictionary = {}
    for letter in s:
      if not letter in dictionary:
        dictionary[letter] = 1
      else:
        dictionary[letter] += 1
    
    odd = False
    count = 0
    
    for key in dictionary:
      if dictionary[key] > 2 or dictionary[key] % 2 == 0:
        count += dictionary[key]
        if dictionary[key] % 2 != 0:
          count -= 1
      if dictionary[key] % 2 != 0:
        odd = True
        
    if odd:
      count += 1
      
    return count