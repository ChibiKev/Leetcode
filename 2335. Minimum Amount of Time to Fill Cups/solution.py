class Solution(object):
  def fillCups(self, amount):
    """
    :type amount: List[int]
    :rtype: int
    """
    total = 0
    highestValue = 0
    for value in amount:
      total += value
      if value > highestValue:
        highestValue = value

    result = highestValue
    if (total + 1) // 2 > result:
      result = (total + 1) // 2

    return result