class Solution(object):
  def threeConsecutiveOdds(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    count = 0
    for number in arr:
      if number % 2 == 1:
        count += 1
        if count == 3:
          return True
      else:
        count = 0
        
    return False