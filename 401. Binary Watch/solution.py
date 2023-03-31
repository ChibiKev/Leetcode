class Solution(object):
  def readBinaryWatch(self, turnedOn):
    """
    :type turnedOn: int
    :rtype: List[str]
    """
    result = []
    for hour in range(12):
      for minute in range(60):
        if (bin(hour) + bin(minute)).count('1') == turnedOn:
          result.append("%d:%02d" % (hour, minute))
    return result