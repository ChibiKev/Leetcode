class Solution(object):
  def minOperations(self, s):
    """
    :type s: str
    :rtype: int
    """
    current = s[0]
    count = 0
    for number in s:
      if current != number:
        count += 1
      if current == "0":
        current = "1"
      else:
        current = "0"
    
    if len(s) - count < count:
      count = len(s) - count
    
    return count