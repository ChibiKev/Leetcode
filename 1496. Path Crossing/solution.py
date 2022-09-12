class Solution(object):
  def isPathCrossing(self, path):
    """
    :type path: str
    :rtype: bool
    """
    x = 0
    y = 0
    
    mySet = {(0,0)}
    
    for letter in path:
      if letter == 'N':
        y += 1
      elif letter == 'S':
        y -= 1
      elif letter == 'E':
        x += 1
      elif letter == 'W':
        x -= 1
      current = (x, y)
      if current in mySet:
        return True
      mySet.add(current)
      
    return False