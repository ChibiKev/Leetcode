class Solution(object):
  def bitwiseComplement(self, n):
    """
    :type n: int
    :rtype: int
    """
    index = 1
    while n > index:
      index = (index << 1) | 1
    return n ^ index