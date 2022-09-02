class Solution(object):
  def maxNumberOfBalloons(self, text):
    """
    :type text: str
    :rtype: int
    """
    b = 0
    a = 0
    l = 0
    o = 0
    n = 0
    
    for letter in text:
      if letter == 'b':
        b += 1
      elif letter == 'a':
        a += 1
      elif letter == 'l':
        l += 1
      elif letter == 'o':
        o += 1
      elif letter == 'n':
        n += 1
        
    minimum = b
    if a < minimum:
      minimum = a
    if l // 2 < minimum:
      minimum = l // 2
    if o // 2 < minimum:
      minimum = o // 2
    if n < minimum:
      minimum = n
      
    return minimum