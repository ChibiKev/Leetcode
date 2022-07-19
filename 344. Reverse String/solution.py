class Solution(object):
  def reverseString(self, s):
    """
    :type s: List[str]
    :rtype: None Do not return anything, modify s in-place instead.
    """
    left = 0
    
    while left < (len(s) / 2):
      temp = s[left]
      s[left] = s[len(s) - 1 - left]
      s[len(s) - 1 - left] = temp
      left += 1
      
    return s