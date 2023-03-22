class Solution:
  # @param n, an integer
  # @return an integer
  def reverseBits(self, n):
    result = 0
    index = 31
    while index > -1:
      result |= ((n >> index) & 1) << (31 - index)
      index -= 1
    return result