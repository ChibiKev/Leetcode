class Solution(object):
  def longestCommonPrefix(self, strs):
    """
    :type strs: List[str]
    :rtype: str
    """
    strs.sort()

    lowestCount = len(strs[0])
    for strings in strs:
      if len(strings) < lowestCount:
        lowestCount = len(strings)
    
    firstStr = strs[0]
    lastStr = strs[-1]
    prefix = ""
    for index in range(lowestCount):
      if firstStr[index] == lastStr[index]:
        prefix += firstStr[index]
      else:
        break
    return prefix