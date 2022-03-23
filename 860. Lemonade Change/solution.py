class Solution(object):
  def lemonadeChange(self, bills):
    """
    :type bills: List[int]
    :rtype: bool
    """
    fives = 0
    tens = 0
    
    for bill in bills:
      if bill == 5:
        fives += 1
      elif bill == 10:
        fives -= 1
        tens += 1
      elif bill == 20 and tens > 0:
        fives -= 1
        tens -= 1
      else:
        fives -= 3
      if fives < 0 or tens < 0:
        return False
        
    return True