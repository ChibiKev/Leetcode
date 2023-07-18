class Solution(object):
  def removeTrailingZeros(self, num):
    """
    :type num: str
    :rtype: str
    """
    end = len(num)
    while num[end - 1] == '0':
      end -= 1
    return num[:end]