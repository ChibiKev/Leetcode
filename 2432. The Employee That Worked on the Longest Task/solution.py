class Solution(object):
  def hardestWorker(self, n, logs):
    """
    :type n: int
    :type logs: List[List[int]]
    :rtype: int
    """
    employeeID = 0
    longestTask = 0
    start = 0
    for log in logs:
      task = log[1] - start
      start = log[1]
      if task > longestTask:
        longestTask = task
        employeeID = log[0]
      elif task == longestTask:
        if employeeID > log[0]:
          employeeID = log[0]

    return employeeID