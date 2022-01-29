class Solution(object):
  def decode(self, encoded, first):
    """
    :type encoded: List[int]
    :type first: int
    :rtype: List[int]
    """
    change = first
    result = [first]
    for number in encoded:
      change = number ^ change
      result.append(change)
    return result