class Solution(object):
  def findPoisonedDuration(self, timeSeries, duration):
    """
    :type timeSeries: List[int]
    :type duration: int
    :rtype: int
    """
    totalTime = 0
    nextTime = 0
    for time in timeSeries:
      subtractedTime = 0
      if time < nextTime:
        subtractedTime = nextTime - time
      nextTime = time + duration
      totalTime += duration - subtractedTime
    return totalTime