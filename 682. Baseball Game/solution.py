class Solution(object):
  def calPoints(self, ops):
    """
    :type ops: List[str]
    :rtype: int
    """
    record = []
    for op in ops:
      if op == "+":
        record.append(record[-1] + record[-2])
      elif op == "D":
        record.append(record[-1] * 2)
      elif op == "C":
        record.pop()
      else:
        record.append(int(op))
    
    total = 0
    for num in record:
      total += num
      
    return total