class Solution(object):
  def calculateTax(self, brackets, income):
    """
    :type brackets: List[List[int]]
    :type income: int
    :rtype: float
    """
    result = 0
    previous = 0
    for bracket in brackets:
      upper = float(bracket[0])
      percent = float(bracket[1])
      if income >= upper:
        result += (upper - previous) * percent / 100
        previous = upper
      else:
        result += (income - previous) * percent / 100
        break
    return result