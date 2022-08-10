class Solution(object):
  def judgeCircle(self, moves):
    """
    :type moves: str
    :rtype: bool
    """
    up = 0
    left = 0
    
    for move in moves:
      if move == 'L':
        left += 1
      elif move == 'R':
        left -= 1
      elif move == 'U':
        up += 1
      elif move == 'D':
        up -= 1
        
    return up == 0 and left == 0