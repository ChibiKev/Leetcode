class Solution(object):
  def decrypt(self, code, k):
    """
    :type code: List[int]
    :type k: int
    :rtype: List[int]
    """
    if k == 0:
      return [0] * len(code)
    start = 1
    end = k + 1
    if k < 0:
      start = len(code) + k
      end = len(code)
    
    total = 0
    for index in range(start, end):
      total += code[index]
    
    result = []
    for num in code:
      result.append(total)
      start = start % len(code)
      end = end % len(code)
      total += code[end]
      total -= code[start]
      start += 1
      end += 1
      
    return result