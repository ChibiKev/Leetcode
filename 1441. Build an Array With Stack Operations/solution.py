class Solution(object):
  def buildArray(self, target, n):
    """
    :type target: List[int]
    :type n: int
    :rtype: List[str]
    """
    current = 1
    result = []
    for num in target:
      if num != current:
        difference = num - current
        result.extend(["Push", "Pop"] * difference)
      result.append("Push")
      current = num + 1
    return result