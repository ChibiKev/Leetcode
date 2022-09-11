class Solution(object):
  def divisorSubstrings(self, num, k):
    """
    :type num: int
    :type k: int
    :rtype: int
    """
    strNum = str(num)
    result = 0
    
    for index in range(0, len(strNum) - k + 1):
      value = int(strNum[index:index + k])
      if value != 0 and num % value == 0:
        result += 1
        
    return result