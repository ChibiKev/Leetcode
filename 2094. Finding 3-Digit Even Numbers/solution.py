class Solution(object):
  def findEvenNumbers(self, digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    total = [0] * 10
    for number in digits:
      total[number] += 1
    result = []
    for hundreds in range(1,10):
      if total[hundreds] == 0:
        continue
      total[hundreds] -= 1
      for tens in range(10):
        if total[tens] == 0:
          continue 
        total[tens] -= 1
        for ones in range(0,10,2):
          if total[ones] == 0:
            continue 
          total[ones] -= 1
          result.append(hundreds * 100 + tens * 10 + ones)
          total[ones] += 1
        total[tens] += 1
      total[hundreds] += 1
    return result