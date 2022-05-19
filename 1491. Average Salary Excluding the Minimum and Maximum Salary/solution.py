class Solution(object):
  def average(self, salary):
    """
    :type salary: List[int]
    :rtype: float
    """
    minimum = salary[0]
    maximum = salary[0]
    total = 0.00
    for employee in salary:
      total += employee
      if employee > maximum:
        maximum = employee
      if employee < minimum:
        minimum = employee
    
    total -= minimum + maximum
    return total / (len(salary) - 2)