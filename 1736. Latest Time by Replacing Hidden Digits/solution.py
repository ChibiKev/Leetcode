class Solution(object):
  def maximumTime(self, time):
    """
    :type time: str
    :rtype: str
    """
    result = ""
    for index, value in enumerate(time):
      if value == '?':
        if index == 0:
          if time[1] == '?' or int(time[1]) < 4:
            result += '2'
          else:
            result += '1'
        elif index == 1:
          if time[0] == '0' or time[0] == '1':
            result += '9'
          else:
            result += '3'
        elif index == 3:
          result += '5'
        elif index == 4:
          result += '9'
      else:
        result += value
        
    return result