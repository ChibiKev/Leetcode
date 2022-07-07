class Solution(object):
  def thousandSeparator(self, n):
    """
    :type n: int
    :rtype: str
    """
    if n < 1000:
      return str(n)
    
    result = ""
    count = 0
    while n > 0:
      if count == 3:
        result = '.' + result
        count = 0
      else:
        result = str(n % 10) + result
        n /= 10
        count += 1
        
    return result