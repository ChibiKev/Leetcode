class Solution(object):
  def finalPrices(self, prices):
    """
    :type prices: List[int]
    :rtype: List[int]
    """
    stack = []
    for index, price in enumerate(prices):
      while stack:
        lastStackIndex = stack[-1]
        if prices[lastStackIndex] < price:
          break
        prices[lastStackIndex] -= price
        stack.pop()
      stack.append(index)
    return prices