class Solution(object):
  def findComplement(self, num):
    """
    :type num: int
    :rtype: int
    """
    index = 1
    while num > index:
      index = (index << 1) | 1
    return num ^ index