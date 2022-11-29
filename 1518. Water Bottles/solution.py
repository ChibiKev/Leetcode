class Solution(object):
  def numWaterBottles(self, numBottles, numExchange):
    """
    :type numBottles: int
    :type numExchange: int
    :rtype: int
    """
    result = numBottles + (numBottles // numExchange)
    count = (numBottles // numExchange) + (numBottles % numExchange)
    
    while count >= numExchange:
      result += (count // numExchange)
      count = (count // numExchange) + (count % numExchange)
  
    return result