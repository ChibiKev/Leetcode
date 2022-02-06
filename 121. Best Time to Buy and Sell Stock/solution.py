class Solution(object):
  def maxProfit(self, prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    start = 0
    profit = 0
    for index in range(1, len(prices)):
      currentProfit = prices[index] - prices[start]
      if prices[start] < prices[index]:
        if profit < currentProfit:
          profit = currentProfit
      else:
        start = index
    return profit