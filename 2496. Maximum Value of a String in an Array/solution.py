class Solution(object):
  def maximumValue(self, strs):
    """
    :type strs: List[str]
    :rtype: int
    """
    result = 0
    for value in strs:
      currentCount = len(value)
      if value.isdigit():
        currentCount = int(value)
      if currentCount > result:
        result = currentCount
    return result