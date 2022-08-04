class Solution(object):
  def maxPower(self, s):
    """
    :type s: str
    :rtype: int
    """
    count = 1
    answer = 1
    for index in range(1, len(s)):
      if s[index] == s[index - 1]:
        count += 1
        if count > answer:
          answer = count
      else:
        count = 1
          
    return answer