class Solution(object):
  def isSameAfterReversals(self, num):
    """
    :type num: int
    :rtype: bool
    """
    if num % 10 == 0 and num != 0:
      return False
    return True