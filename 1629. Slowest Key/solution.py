class Solution(object):
  def slowestKey(self, releaseTimes, keysPressed):
    """
    :type releaseTimes: List[int]
    :type keysPressed: str
    :rtype: str
    """
    maxValue = 0
    maxLetter = ""
    
    lastTime = 0
    for index, time in enumerate(releaseTimes):
      duration = time - lastTime
      if duration > maxValue:
        maxValue = duration
        maxLetter = keysPressed[index]
      if duration == maxValue and keysPressed[index] > maxLetter:
        maxLetter = keysPressed[index]
      lastTime = time
      
    return maxLetter