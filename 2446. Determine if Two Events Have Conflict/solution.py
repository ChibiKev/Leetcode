class Solution(object):
  def haveConflict(self, event1, event2):
    """
    :type event1: List[str]
    :type event2: List[str]
    :rtype: bool
    """
    event1Start = (int(event1[0][0:2]) * 60) + int(event1[0][3:5])
    event1End = (int(event1[1][0:2]) * 60) + int(event1[1][3:5])
    event2Start = (int(event2[0][0:2]) * 60) + int(event2[0][3:5])
    event2End = (int(event2[1][0:2]) * 60) + int(event2[1][3:5])

    if event1Start <= event2Start and event2Start <= event1End:
      return True
    elif event1Start <= event2End and event2End <= event1End:
      return True
    elif event2Start <= event1Start and event1Start <= event2End:
      return True
    elif event2Start <= event1End and event1End <= event2End:
      return True
    
    return False