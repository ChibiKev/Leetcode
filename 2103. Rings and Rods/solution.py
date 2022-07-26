class Solution(object):
  def countPoints(self, rings):
    """
    :type rings: str
    :rtype: int
    """
    red = [0,0,0,0,0,0,0,0,0,0]
    green = [0,0,0,0,0,0,0,0,0,0]
    blue = [0,0,0,0,0,0,0,0,0,0]
    
    index = 0
    while index < len(rings):
      letter = rings[index]
      value = int(rings[index + 1])
      if letter == 'R':
        red[value] += 1
      elif letter == 'G':
        green[value] += 1
      elif letter == 'B':
        blue[value] += 1
      index += 2
      
    count = 0
    for index in range(0,10):
      if red[index] > 0 and green[index] > 0 and blue[index] > 0:
        count += 1
        
    return count