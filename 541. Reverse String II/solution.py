class Solution(object):
  def reverseStr(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: str
    """
    result = ""
    reverse = True
    start = 0
    end = k
    while start < len(s):
      if reverse:
        result += s[start:end][::-1]
      else:
        result += s[start:end]
      reverse = not reverse
      start += k
      end += k
        
    return result