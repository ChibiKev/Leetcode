class Solution(object):
  def isHappy(self, n):
    """
    :type n: int
    :rtype: bool
    """
    mySet = set()
    while n != 1:
      if n not in mySet:
        mySet.add(n)
      else:
        return False
      
      total = 0
      while n > 0:
        total += (n % 10) * (n % 10)
        n /= 10
      n = total
    
    return True