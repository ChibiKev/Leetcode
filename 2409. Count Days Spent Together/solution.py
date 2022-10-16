class Solution(object):
  def countDaysTogether(self, arriveAlice, leaveAlice, arriveBob, leaveBob):
    """
    :type arriveAlice: str
    :type leaveAlice: str
    :type arriveBob: str
    :type leaveBob: str
    :rtype: int
    """
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    arriveAliceDays = sum(months[:int(arriveAlice[:2]) - 1]) + int(arriveAlice[3:5])
    leaveAliceDays = sum(months[:int(leaveAlice[:2]) - 1]) + int(leaveAlice[3:5])
    arriveBobDays = sum(months[:int(arriveBob[:2]) - 1]) + int(arriveBob[3:5])
    leaveBobDays = sum(months[:int(leaveBob[:2]) - 1]) + int(leaveBob[3:5])

    if leaveAliceDays < arriveBobDays or leaveBobDays < arriveAliceDays:
      return 0
    
    return min(leaveAliceDays, leaveBobDays) - max(arriveBobDays, arriveAliceDays) + 1