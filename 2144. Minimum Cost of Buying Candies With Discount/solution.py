class Solution(object):
  def minimumCost(self, cost):
    """
    :type cost: List[int]
    :rtype: int
    """
    cost.sort(reverse=True)
    count = 0
    total = 0
    for num in cost:
      if count == 2:
        count = 0
        continue
      count += 1
      total += num
    return total