class Solution(object):
  def subtractProductAndSum(self, n):
    """
    :type n: int
    :rtype: int
    """
    values = []
    tempNumber = n
    while tempNumber > 0:
      values.append(tempNumber % 10)
      tempNumber /= 10

    product = 1
    totalSum = 0
    for value in values:
      product *= value
      totalSum += value
    
    return product - totalSum