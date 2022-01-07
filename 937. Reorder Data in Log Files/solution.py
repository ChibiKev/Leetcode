class Solution(object):
  def reorderLogFiles(self, logs):
    """
    :type logs: List[str]
    :rtype: List[str]
    """
    letterLogs = []
    digitLogs = []

    result = []

    for log in logs:
      formattedLog = log.split()
      if formattedLog[1].isdigit():
        digitLogs.append(log)
      else:
        letterLogs.append(log)

    letterLogs.sort(key = lambda x : x.split()[0])
    letterLogs.sort(key = lambda x : x.split()[1:])

    result = letterLogs + digitLogs

    return result