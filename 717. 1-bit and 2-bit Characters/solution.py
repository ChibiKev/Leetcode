class Solution(object):
  def isOneBitCharacter(self, bits):
    """
    :type bits: List[int]
    :rtype: bool
    """
    index = 0
    bitsSize = len(bits) - 1
    while index < bitsSize:
      if bits[index] == 1:
        index += 2
      else:
        index += 1
    return index == bitsSize