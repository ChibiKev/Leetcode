class Solution(object):
  def maximumWealth(self, accounts):
    """
    :type accounts: List[List[int]]
    :rtype: int
    """
    result = 0
    for account in accounts:
      total = 0
      for money in account:
        total += money
      if total > result:
        result = total
    return result